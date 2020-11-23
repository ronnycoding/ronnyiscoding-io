import React, { useEffect, useState } from 'react';
import { motion, AnimateSharedLayout } from 'framer-motion';
import Image from 'next/image';

import { useTheme, LIGHT } from '../../theme/useTheme';
import { CategoriesType } from '../../pages';
import {
  Project_Acfrecentprojects,
  Project,
} from '../../src/generated/graphql';
import { SubHeaderTitleH3 } from '../../styles/styles';

const spring = {
  type: 'spring',
  stiffness: 500,
  damping: 30,
};

interface FilterBarInterface extends CategoriesType {
  isLightTheme: boolean;
  onChange: (str: string) => void;
  selected: string;
}

interface FilterContentInterface extends CategoriesType {
  isLightTheme: boolean;
  selected: string;
  onSelectProject: (project: Project) => void;
}

interface ProjectCardInterface {
  bgImage?: string | null;
  acfRecentProjects: Project_Acfrecentprojects | null | undefined;
  isLightTheme: boolean;
  onClick: () => void;
  display?: boolean;
}

interface ModalDetailsInterface {
  backgroundColor: string;
  onClose: () => void;
  project: Project | null;
}

const FilterBar = ({
  categories,
  isLightTheme = false,
  onChange = () => {},
  selected = '',
}: FilterBarInterface) => {
  const getInTouchColor = isLightTheme ? 'cinnabar' : 'blue-night';
  const fontColor = isLightTheme ? 'text-blueDiane' : 'text-white';
  const { theme } = useTheme();
  const clean = () => onChange('');
  return (
    <AnimateSharedLayout>
      <div className='w-full flex-column lg:flex justify-center'>
        <div
          tabIndex={0}
          className={`outline-none cursor-pointer pointer-events-auto bg-transparent text-sm font-roboto hover:bg-${getInTouchColor} font-normal hover:text-white py-4 px-12 relative ${
            '' === selected
              ? `bg-${getInTouchColor} active text-white`
              : fontColor
          }`}
          onClick={clean}
          onKeyPress={clean}
        >
          {'Show all'}
          {'' === selected && (
            <motion.div
              layoutId='outline'
              initial={false}
              transition={spring}
              animate={{ backgroundColor: theme.primary }}
              style={{
                position: 'absolute',
                top: '0px',
                left: '0px',
                right: '0px',
                bottom: '0px',
                zIndex: -1,
              }}
            />
          )}
        </div>
        {categories.nodes &&
          categories.nodes
            .filter(({ projects }) => projects.nodes.length)
            .map(({ id, name }) => (
              <div
                key={id}
                tabIndex={0}
                className={`outline-none cursor-pointer pointer-events-auto bg-transparent text-sm font-roboto hover:bg-${getInTouchColor} font-normal hover:text-white py-4 px-12 hover:border-transparent relative ${
                  id === selected
                    ? `bg-${getInTouchColor} active text-white`
                    : fontColor
                }`}
                onClick={() => onChange(id)}
                onKeyPress={() => onChange(id)}
              >
                {name}
                {id === selected && (
                  <motion.div
                    layoutId='outline'
                    initial={false}
                    animate={{ backgroundColor: theme.primary }}
                    transition={spring}
                    style={{
                      position: 'absolute',
                      top: '0px',
                      left: '0px',
                      right: '0px',
                      bottom: '0px',
                      zIndex: -1,
                    }}
                  />
                )}
              </div>
            ))}
      </div>
    </AnimateSharedLayout>
  );
};

const ProjectCard = ({
  bgImage = '',
  acfRecentProjects,
  isLightTheme = false,
  onClick = () => {},
  display = true,
}: ProjectCardInterface) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const getInTouchColor = isLightTheme ? 'cinnabar' : 'blue-night';
  const fontColor = isLightTheme ? 'text-white' : 'text-white';

  const setOnHover = () => setIsHover(true);
  const setOnLeave = () => setIsHover(false);
  return (
    <motion.div
      initial={{
        ...(display
          ? { opacity: 0, display: 'none', scale: '0%' }
          : { opacity: 1, display: 'flex', scale: '100%' }),
      }}
      animate={{
        ...(display
          ? { opacity: 1, display: 'flex', scale: '100%' }
          : { opacity: 0, display: 'none', scale: '0%' }),
      }}
      transition={{ duration: 0.5 }}
      className={`h-54 w-full relative pointer-events-auto cursor-pointer mt-4 flex flex-col items-center align-middle justify-center`}
      onMouseEnter={setOnHover}
      onMouseLeave={setOnLeave}
    >
      {isHover && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75 }}
            className='flex flex-col justify-center items-center z-20 absolute w-full h-full p-4'
          >
            <SubHeaderTitleH3
              className={`font-opensans text-sm leading-tight lg:text-xl font-semibold ${fontColor} text-center`}
            >
              {acfRecentProjects && acfRecentProjects.title}
            </SubHeaderTitleH3>
            <motion.div
              tabIndex={0}
              className={`cursor-pointer pointer-events-auto bg-transparent text-base font-roboto ${fontColor} font-normal py-4 px-12 border border-white mt-2`}
              onClick={onClick}
            >
              Open Project
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`absolute w-full h-full z-10 opacity-75 bg-${getInTouchColor}`}
          />
        </>
      )}
      <Image
        className=''
        src={(bgImage && bgImage) || ''}
        alt={''}
        width='auto'
        height={200}
        loading='eager'
        onClick={onClick}
      />
    </motion.div>
  );
};

const FilterContent = ({
  categories,
  isLightTheme,
  selected = '',
  onSelectProject,
}: FilterContentInterface) => {
  return (
    <div className='w-full lg:grid grid-cols-3 gap-4'>
      {categories.nodes &&
        categories.nodes
          .filter(({ projects }) => projects.nodes.length)
          .map(({ id: idCategory, projects }) => (
            <React.Fragment key={idCategory}>
              {projects.nodes.map(
                ({ id, acfRecentProjects, featuredImage, ...restProject }) => (
                  <ProjectCard
                    key={id}
                    isLightTheme={isLightTheme}
                    bgImage={featuredImage?.node?.sourceUrl}
                    display={idCategory === selected || selected === ''}
                    acfRecentProjects={acfRecentProjects}
                    onClick={() =>
                      onSelectProject({
                        id,
                        acfRecentProjects,
                        featuredImage,
                        ...restProject,
                      })
                    }
                  />
                )
              )}
            </React.Fragment>
          ))}
    </div>
  );
};

const ModalDetails = ({
  backgroundColor,
  onClose,
  project,
}: ModalDetailsInterface) => {
  const { theme } = useTheme();
  return (
    <motion.div
      className={`main-modal fixed w-full h-100 inset-0 overflow-hidden flex justify-center items-center`}
      style={{
        zIndex: 99,
      }}
    >
      <motion.div
        initial={{ borderRadius: 400, width: 0, height: 0 }}
        animate={{ height: 5000, width: 5000 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'absolute',
          bottom: 0,
          backgroundColor: theme.primary,
        }}
        className={`absolute h-full w-full ${backgroundColor} opacity-100`}
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className='border border-transparent bg-transparent w-11/12 mx-auto z-50 overflow-y-auto'
      >
        <motion.div className='modal-content text-left'>
          <motion.div className='flex justify-between items-center pb-3'>
            <motion.p className='text-2xl font-bold text-black'>
              {project?.acfRecentProjects?.title}
            </motion.p>
            <motion.div
              className='modal-close cursor-pointer z-50 border-black border-2 p-4 absolute'
              onClick={onClose}
              style={{
                top: 50,
                right: 50,
              }}
            >
              <motion.svg
                className='fill-current text-black'
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='18'
                viewBox='0 0 18 18'
              >
                <motion.path d='M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z'></motion.path>
              </motion.svg>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className='w-full bg-gray-500  bg-no-repeat hidden lg:block'
          style={{
            backgroundBlendMode: 'luminosity',
            backgroundPosition: 'top center',
            backgroundImage: `url(${project?.featuredImage?.node?.sourceUrl})`,
            minHeight: '50vh',
          }}
        />
        <motion.div className='modal-content py-4 text-left flex flex-col lg:flex-row justify-between'>
          <motion.div
            className='my-5 text-black max-w-lg'
            dangerouslySetInnerHTML={{
              __html: project?.acfRecentProjects?.description || '',
            }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <Image
              src={project?.featuredImage?.node?.sourceUrl || ''}
              width='auto'
              height={200}
              loading='eager'
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Portfolio = ({ categories }: CategoriesType) => {
  const { mode } = useTheme();
  const isLightTheme = mode === LIGHT;
  const selectedBgColor = isLightTheme ? 'bg-cinnabar' : 'bg-blue-400';
  const [categorySelected, setCategorySelected] = useState<string>('');
  const [projectSelected, setProjectSelected] = useState<Project | null>(null);

  const handleOnSelectProject = (project: Project) => {
    setProjectSelected(project);
  };

  const handleOnCloseProject = () => {
    setProjectSelected(null);
  };

  return (
    <>
      <div className='w-full flex justify-center py-6'>
        <div className='w-full'>
          <FilterBar
            selected={categorySelected}
            onChange={setCategorySelected}
            isLightTheme={isLightTheme}
            categories={categories}
          />
          <AnimateSharedLayout type='switch'>
            <FilterContent
              onSelectProject={handleOnSelectProject}
              selected={categorySelected}
              isLightTheme={isLightTheme}
              categories={categories}
            />
            {projectSelected && (
              <ModalDetails
                project={projectSelected}
                onClose={handleOnCloseProject}
                backgroundColor={selectedBgColor}
              />
            )}
          </AnimateSharedLayout>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
