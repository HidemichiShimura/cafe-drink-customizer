import moodStyles from '@/styles/pages/mood.module.scss';

const MoodSelectionLayout= ({ 
  children,
  title 
}) => (
  <div className={moodStyles.selectionContainer}>
    <h3>{title}</h3>
    <div className={moodStyles.selectionItems}>
      {children}
    </div>
      
  </div>
);

export { MoodSelectionLayout };
