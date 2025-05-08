import React, { useState } from 'react';
import { JigsawPuzzle } from 'react-jigsaw-puzzle/lib';
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css';

const PuzzleGame = ({ imageSrc, rows, columns }) => {
  const [completed, setCompleted] = useState(false);

  const handleSolved = () => {
    setCompleted(true);
    setTimeout(() => {
      alert('Selamat! Anda telah menyelesaikan puzzle!');
    }, 500);
  };

  return (
    <div className="puzzle-container">
      <h2 className="text-center mb-4">Puzzle Gen Z</h2>
      
      {completed ? (
        <div className="text-center">
          <h3 className="text-success">Puzzle Selesai!</h3>
          <button 
            className="btn btn-primary mt-3"
            onClick={() => setCompleted(false)}
          >
            Main Lagi
          </button>
        </div>
      ) : (
        <div>
          <JigsawPuzzle
            imageSrc={imageSrc}
            rows={rows}
            columns={columns}
            onSolved={handleSolved}
            className="puzzle-board"
          />
        </div>
      )}
    </div>
  );
};

export default PuzzleGame;
