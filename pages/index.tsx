import Head from 'next/head';
import Image from 'next/image';

import Container from '../components/container';
import Layout from '../components/layout';
import Portfolio from '../components/portfolio';

// import {
//   getFrontPageContent,
//   getSettings,
//   getMainMenu,
//   getRecentProjects,
//   getWorkExperience,
// } from '../lib/api';
import {
  IntroductionSpan,
  HeaderTitle,
  HeaderDescription,
  TitleSpan,
  StatementSpan,
  AboutMeStatement,
  SubHeaderTitle,
} from '../styles/styles';
import { useTheme, LIGHT } from '../theme/useTheme';

// import {
//   Page,
//   GeneralSettings,
//   Settings,
//   Menu,
//   Project,
//   AcfWorkExperience,
// } from '../src/generated/graphql';

const profilePic = require('../public/images/ronnyfreites-profile.jpg');

export type CategoriesType = {
  categories: {
    nodes: {
      name: string;
      id: string;
      projects: {
        // nodes: Project[];
      };
    }[];
  };
};

type WorkExperience = {
  acfWorksExperience: {
    // nodes: AcfWorkExperience[];
  };
};

interface IndexProps extends CategoriesType, WorkExperience {
  // page: Page;
  // allSettings: Settings;
  // generalSettings: GeneralSettings;
}

export default function Index({
  // page,
  // allSettings,
  // generalSettings,
  categories,
  acfWorksExperience,
}: IndexProps) {
  // const { seo, acfPage } = page;
  const { theme, mode } = useTheme();

  const getInTouchColor = mode === LIGHT ? 'cinnabar' : 'blue-night';

  return (
    <Layout
    // {...{ seo, allSettings, generalSettings }}
    >
      <Head>
        {/* {seo && <title>{seo.title}</title>} */}
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link
          href='https://fonts.googleapis.com/css2?family=Karla:wght@400;700&family=Lora:wght@400;500;700&family=Open+Sans:wght@300;400;700;800&family=Roboto:wght@300;400;500;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Container>
        <HeaderTitle>
          <IntroductionSpan
            initial={{
              opacity: 0,
              marginTop: 20,
            }}
            animate={{ opacity: 1, marginTop: 0 }}
            transition={{
              duration: 0.5,
            }}
            className='font-roboto text-base leading-tight text-gray-lightTheme dark:text-gray-darkTheme'
          >
            {/* {acfPage && acfPage.introduction} */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </IntroductionSpan>
          <TitleSpan
            initial={{
              opacity: 0,
              marginTop: 20,
            }}
            animate={{ opacity: 1, marginTop: 0 }}
            transition={{
              duration: 0.75,
            }}
            className='font-opensans text-4xl leading-tight lg:text-6xl font-extrabold text-gray-lightTheme dark:text-gray-darkTheme'
          >
            {/* {acfPage && acfPage.title} */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </TitleSpan>
          <StatementSpan
            initial={{
              opacity: 0,
              marginTop: 20,
            }}
            animate={{ opacity: 1, marginTop: 0 }}
            transition={{
              duration: 1,
            }}
            className={`font-opensans text-2xl leading-tight lg:text-6xl font-semibold text-blueDiane dark:text-silver`}
          >
            {/* {acfPage && acfPage.statement} */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </StatementSpan>
        </HeaderTitle>
        <div className='lg:grid grid-cols-2'>
          {/* <HeaderDescription
            initial={{
              opacity: 0,
              marginTop: 20,
            }}
            animate={{ opacity: 1, marginTop: 0 }}
            transition={{
              duration: 1,
            }}
            className={`font-roboto mt-8 leading-normal text-base lg:text-xl text-blueDiane dark:text-silver`}
            dangerouslySetInnerHTML={{
              __html: (acfPage && acfPage.briefDescription) || '',
            }}
          /> */}
        </div>
        <div className='mt-12 flex'>
          <a
            tabIndex={0}
            className={`cursor-pointer pointer-events-auto bg-transparent text-base font-roboto hover:bg-${getInTouchColor} text-${getInTouchColor} font-normal hover:text-white py-4 px-12 border border-${getInTouchColor} hover:border-transparent transform transition-all duration-300 scale-100 hover:scale-150`}
          >
            Let's Get in touch
          </a>
        </div>
        <div className='flex flex-col lg:grid grid-cols-3 my-20'>
          <div className='col-span-2 mb-4 lg:mb-auto relative'>
            {/* <Image
              src={profilePic}
              alt={
                (acfPage &&
                  acfPage.headshotPic &&
                  acfPage.headshotPic.altText) ||
                ''
              }
              width={862}
              height={690}
              loading='eager'
            /> */}
          </div>
          <div className='flex flex-col items-start'>
            <SubHeaderTitle
              className={`font-opensans text-xl leading-none lg:text-4xl font-semibold text-blueDiane dark:text-silver`}
            >
              {/* {acfPage && acfPage.aboutMeTitlte} */}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </SubHeaderTitle>
            {/* <AboutMeStatement
              dangerouslySetInnerHTML={{
                __html: (acfPage && acfPage.aboutMe) || '',
              }}
              className={`mt-8 font-roboto leading-normal text-lg text-blueDiane dark:text-silver flex flex-col justify-center`}
            /> */}
            <a
              tabIndex={0}
              className={`cursor-pointer pointer-events-auto bg-transparent text-base font-roboto hover:bg-${getInTouchColor} text-${getInTouchColor} font-normal hover:text-white py-4 px-12 border border-${getInTouchColor} hover:border-transparent transform transition-all duration-300 scale-100 hover:scale-150 mt-10`}
            >
              Let's talk about your project
            </a>
          </div>
        </div>
        <div className='mt-40'>
          <SubHeaderTitle
            className={`font-opensans text-xl leading-none lg:text-4xl font-semibold text-blueDiane dark:text-silver`}
          >
            {/* {acfPage && acfPage.recentProjectsTitle} */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </SubHeaderTitle>
          {/* <Portfolio categories={categories} /> */}
        </div>
      </Container>
    </Layout>
  );
}

// export async function getStaticProps() {
//   const frontPageData: Page = await getFrontPageContent();
//   const pageSettings: Settings = await getSettings();
//   const mainMenu: Menu = await getMainMenu();
//   const recentProjects: CategoriesType = await getRecentProjects();
//   const workExperience: WorkExperience = await getWorkExperience();
//   return {
//     props: {
//       ...frontPageData,
//       ...pageSettings,
//       ...mainMenu,
//       ...recentProjects,
//       ...workExperience,
//     },
//   };
// }
