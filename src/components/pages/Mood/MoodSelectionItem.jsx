import moodStyles from '@/styles/pages/mood.module.scss';

const tempButtonStyle = { "width": "200px", "height": "200px" };

const MoodSelectionItem = ({ 
  id,
  name,
  handleItemClick, 
  isSelected = false
}) => (   
  <div className={moodStyles.selectionItem}>
    <button
      style={tempButtonStyle}
      type="button" 
      onClick={() => handleItemClick(id)}
      >
      {name} {isSelected && 'selected'}
    </button>
    <p>{name}</p>
  </div> 
);

export { MoodSelectionItem };
