import React, { useState } from 'react';
import { motion, AnimateSharedLayout } from 'framer-motion';
import Image from 'next/image';

import { Project, ProjectCategory } from '../../src/generated/graphql';
import { SubHeaderTitleH3 } from '../../styles/styles';
import { useTheme, LIGHT } from '../../theme/useTheme';

const tailwind = require('../../tailwind.config');

const spring = {
  type: 'spring',
  stiffness: 500,
  damping: 30,
};

interface IFilterBar {
  onChange: (str: string) => void;
  selected: string;
  categories: ProjectCategory[];
}

interface IFilterContent {
  categories: ProjectCategory[];
  selected: string;
  onSelectProject: (project: Project) => void;
}

interface IProjectCard {
  title: string;
  bgImage?: string | null;
  onClick: () => void;
  display?: boolean;
}

interface IModalDetails {
  onClose: () => void;
  project: Project;
}

const FilterBar = ({
  categories,
  onChange = () => {},
  selected = '',
}: IFilterBar) => {
  const clean = () => onChange('');
  const { mode } = useTheme();
  return (
    <AnimateSharedLayout>
      <motion.div className='w-full flex-column lg:flex justify-center'>
        <motion.div
          tabIndex={0}
          className={`outline-none cursor-pointer pointer-events-auto bg-transparent text-sm font-roboto hover:bg-cinnabar dark:hover:bg-blue-night font-normal hover:text-white dark:hover:text-white py-4 px-12 relative ${
            '' === selected
              ? 'bg-cinnabar dark:bg-blue-night active text-white dark:text-white'
              : 'text-blueDiane dark:text-white'
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
              animate={{
                backgroundColor:
                  mode === LIGHT
                    ? tailwind.theme.colors.cinnabar
                    : tailwind.theme.colors.blue.night,
              }}
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
        </motion.div>
        {categories &&
          categories
            .filter(({ projects }) => projects.length)
            .map(({ id, title }) => (
              <motion.div
                key={id}
                layoutId={id}
                tabIndex={0}
                className={`outline-none cursor-pointer pointer-events-auto bg-transparent text-sm font-roboto hover:bg-cinnabar dark:hover:bg-blue-night font-normal hover:text-white py-4 px-12 hover:border-transparent relative ${
                  id === selected
                    ? 'bg-cinnabar dark:bg-blue-night active text-white dark:text-white'
                    : 'text-blueDiane dark:text-white'
                }`}
                onClick={() => onChange(id)}
                onKeyPress={() => onChange(id)}
              >
                {title}
                {id === selected && (
                  <motion.div
                    layoutId='outline'
                    initial={false}
                    animate={{
                      backgroundColor:
                        mode === LIGHT
                          ? tailwind.theme.colors.cinnabar
                          : tailwind.theme.colors.blue.night,
                    }}
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
              </motion.div>
            ))}
      </motion.div>
    </AnimateSharedLayout>
  );
};

const ProjectCard = ({
  title,
  bgImage,
  onClick = () => {},
  display = true,
}: IProjectCard) => {
  const [isHover, setIsHover] = useState<boolean>(false);

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
      className='h-54 w-full relative pointer-events-auto cursor-pointer mt-4 flex flex-col items-center align-middle justify-center'
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
              className={`font-opensans text-sm leading-tight lg:text-xl font-semibold text-white dark:text-white text-center`}
            >
              {title}
            </SubHeaderTitleH3>
            <motion.div
              tabIndex={0}
              className={`cursor-pointer pointer-events-auto bg-transparent text-base font-roboto text-white dark:text-white font-normal py-4 px-12 border border-white mt-2`}
              onClick={onClick}
            >
              Open Project
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`absolute w-full h-full z-10 opacity-75 bg-cinnabar dark:bg-blue-night`}
          />
        </>
      )}
      <Image
        className=''
        src={(bgImage && bgImage) || ''}
        alt={`${title} project portfolio`}
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
  selected = '',
  onSelectProject,
}: IFilterContent) => {
  return (
    <div className='w-full lg:grid grid-cols-3 gap-4'>
      {categories &&
        categories
          .filter(({ projects }) => projects.length)
          .map(({ id: idCategory, projects }) => (
            <React.Fragment key={idCategory}>
              {projects.map(
                ({
                  id: projectCardId,
                  title,
                  featureImage,
                  ...projectRestProps
                }) => (
                  <ProjectCard
                    key={projectCardId}
                    title={title || ''}
                    bgImage={featureImage?.url || ''}
                    display={idCategory === selected || selected === ''}
                    onClick={() =>
                      onSelectProject({
                        id: projectCardId,
                        title,
                        featureImage,
                        ...projectRestProps,
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

const ModalDetails = ({ onClose, project }: IModalDetails) => {
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
        }}
        className='absolute h-full w-full bg-cinnabar dark:bg-blue-night opacity-100'
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
              {project?.title}
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
            backgroundImage: `url(${project?.featureImage?.url})`,
            minHeight: '50vh',
          }}
        />
        <motion.div className='modal-content py-4 text-left flex flex-col lg:flex-row justify-between'>
          <motion.div
            className='my-5 text-black max-w-lg'
            dangerouslySetInnerHTML={{
              __html: project?.description || '',
            }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <Image
              src={project?.featureImage?.url || ''}
              alt={project?.title || ''}
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

interface IPortfolio {
  categories: ProjectCategory[];
}

const Portfolio = ({ categories }: IPortfolio) => {
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
            categories={categories}
          />
          <AnimateSharedLayout type='switch'>
            <FilterContent
              onSelectProject={handleOnSelectProject}
              selected={categorySelected}
              categories={categories}
            />
            {projectSelected && (
              <ModalDetails
                project={projectSelected}
                onClose={handleOnCloseProject}
              />
            )}
          </AnimateSharedLayout>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
