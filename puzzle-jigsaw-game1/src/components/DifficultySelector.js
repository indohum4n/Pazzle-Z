import React from 'react';

const DifficultySelector = ({ difficulty, onChangeDifficulty }) => {
  const difficulties = [
    { name: 'Mudah', rows: 3, columns: 3 },
    { name: 'Sedang', rows: 4, columns: 4 },
    { name: 'Sulit', rows: 5, columns: 5 },
  ];

  return (
    <div className="difficulty-selector mb-4">
      <h3 className="mb-3">Tingkat Kesulitan</h3>
      <div className="btn-group" role="group">
        {difficulties.map((level, index) => (
          <button
            key={index}
            type="button"
            className={`btn ${difficulty.name === level.name ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => onChangeDifficulty(level)}
          >
            {level.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DifficultySelector;
