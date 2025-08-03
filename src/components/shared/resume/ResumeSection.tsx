import { ResumeTabs } from './ResumeTabs';

export const ResumeSection = () => {
  return (
    <section className="py-12 md:py-20 px-4">
      <div className="text-center mb-8">
        <p className="text-primary font-medium uppercase tracking-wider">
          7+ Years of Experience
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold">My Resume</h1>
      </div>

      <ResumeTabs />
    </section>
  );
};
