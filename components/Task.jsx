export const STATUS_TYPES = {
  approved: 'approved',
  waiting: 'waiting',
  review: 'review',
  progress: 'progress'
}

export const STATUS_LABELS = {
  [STATUS_TYPES.approved]: 'Approved',
  [STATUS_TYPES.waiting]: 'Waiting',
  [STATUS_TYPES.review]: 'In Review',
  [STATUS_TYPES.progress]: 'In Progress'
};

export default function Task({ id, label = 'task', status = 'waiting', checked = false, onChange }) {
  const handleChange = (e) => {
    onChange(id, !checked);
  };

  return (
    <div className="task" onClick={handleChange}>
      <input
        className="task-item"
        name="task"
        type="checkbox"
        checked={checked}
      />
      <label htmlFor="item-9">
        <span className="label-text">{label}</span>
      </label>
      <span className={`tag ${status}`}>{STATUS_TYPES[status]}</span>
    </div>
  )
}