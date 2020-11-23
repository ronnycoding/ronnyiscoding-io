import Image from 'next/image';

import Container from '../components/container';
import Layout from '../components/layout';
import Portfolio from '../components/portfolio';

import {
  getFrontPageContent
} from '../lib/api';
import {
  IntroductionSpan,
  HeaderTitle,
  HeaderDescription,
  TitleSpan,
  StatementSpan,
  AboutMeStatement,
  SubHeaderTitle,
} from '../styles/styles';

import {
  Url,
  ProjectCategory
} from '../src/generated/graphql';


interface IndexProps {
  url: Url;
  projectCategories: ProjectCategory[]
}

export default function Index({
  url,
  projectCategories
}: IndexProps) {
  const { page } = url;
  const { seo } = page || {};

  return (
    <Layout
      seo={seo}
    >
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
            {page?.introSection?.smallParagraph || ''}
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
            {page?.introSection?.bigBoldParagraph}
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
            {page?.introSection?.bigParagraph}
          </StatementSpan>
        </HeaderTitle>
        <div className='lg:grid grid-cols-2'>
          {page && page?.introSection && (
            <HeaderDescription
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
                __html: (page.introSection && page.introSection?.briefDescription) || '',
              }}
            />
          )}
        </div>
        <div className='mt-12 flex'>
          <a
            tabIndex={0}
            className='cursor-pointer pointer-events-auto bg-transparent text-base font-roboto hover:bg-cinnabar dark:hover:bg-blue-night text-cinnabar dark:text-blue-night font-normal hover:text-white dark:hover:text-white py-4 px-12 border border-cinnabar dark:border-blue-night hover:border-transparent transform transition-all duration-300 scale-100 hover:scale-150'
          >
            Let's Get in touch
          </a>
        </div>   
        {page && page?.imageTexts && page?.imageTexts.map(({image, title, text, id}) => (
          <div key={id} className='flex flex-col lg:grid grid-cols-3 my-20'>
            <div className='col-span-2 mb-4 lg:mb-auto lg:w-4/5 relative'>
              <Image
                src={image?.url || ''}
                width={image?.width || ''}
                height={image?.height || ''}
                loading='eager'
              />
            </div>
            <div className='flex flex-col items-start'>
              <SubHeaderTitle
                className={`font-opensans text-xl leading-none lg:text-4xl font-semibold text-blueDiane dark:text-silver`}
              >
                {title}
              </SubHeaderTitle>
              <AboutMeStatement
                dangerouslySetInnerHTML={{
                  __html: text || '',
                }}
                className={`mt-8 font-roboto leading-normal text-lg text-blueDiane dark:text-silver flex flex-col justify-center`}
              />
              <a
                tabIndex={0}
                className='cursor-pointer pointer-events-auto bg-transparent text-base font-roboto hover:bg-cinnabar dark:hover:bg-blue-night text-cinnabar dark:text-blue-night font-normal hover:text-white dark:hover:text-white py-4 px-12 border border-cinnabar dark:border:blue-night hover:border-transparent transform transition-all duration-300 scale-100 hover:scale-150 mt-10'
              >
                Let's talk about your project
              </a>
            </div>
          </div>
        ))}
        <div className='mt-40'>
          <SubHeaderTitle
            className={`font-opensans text-xl leading-none lg:text-4xl font-semibold text-blueDiane dark:text-silver`}
          >
            Some Projects
          </SubHeaderTitle>
          <Portfolio categories={projectCategories} />
        </div>
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const frontPageData: IndexProps = await getFrontPageContent();
  return {
    props: {
      ...frontPageData,
    },
  };
}
