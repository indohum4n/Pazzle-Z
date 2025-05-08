import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import JigsawPuzzle from './components/JigsawPuzzle';
import ImageSelector from './components/ImageSelector';
import DifficultySelector from './components/DifficultySelector';

// Import gambar-gambar puzzle 
import image1 from './assets/images/image1.jpg'; 
// import image2 from './assets/images/image2.jpg'; 
// import image3 from './assets/images/image3.jpg'; 

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [difficulty, setDifficulty] = useState({ name: 'Mudah', rows: 3, columns: 3 });
  const [gameStarted, setGameStarted] = useState(false);

  const images = [
    { name: 'Gambar 1', src: image1 },
    // { name: 'Gambar 2', src: image2 },
    // { name: 'Gambar 3', src: image3 },
  ];

  const handleStartGame = () => {
    if (selectedImage) {
      setGameStarted(true);
    } else {
      alert('Silakan pilih gambar terlebih dahulu!');
    }
  };

  const handleBackToMenu = () => {
    setGameStarted(false);
  };

  return (
    <div className="grid-container">
      <div className="item1">
        <div className="logo gridpad">
          <h1>Puzzle Gen Z</h1>
        </div>
      </div>

      <div className="item2">
        <div className="sidebar-menu">
          <h3>Menu</h3>
          {gameStarted && (
            <button className="btn btn-secondary mb-3 w-100" onClick={handleBackToMenu}>
              Kembali ke Menu
            </button>
          )}
          <p>Selamat datang di game Puzzle Gen Z!</p>
          <p>Susun potongan puzzle untuk membentuk gambar yang utuh.</p>
        </div>
      </div>

      <div className="item6">
        {!gameStarted ? (
          <div className="setup-container">
            <h2 className="mb-4">Pengaturan Game</h2>
            <ImageSelector images={images} onSelectImage={setSelectedImage} />
            <DifficultySelector difficulty={difficulty} onChangeDifficulty={setDifficulty} />
            <button 
              className="btn btn-success btn-lg mt-3" 
              onClick={handleStartGame}
            >
              Mulai Game
            </button>
          </div>
        ) : (
          <JigsawPuzzle 
            imageSrc={selectedImage} 
            rows={difficulty.rows} 
            columns={difficulty.columns} 
          />
        )}
      </div>

      <div className="item3">
        <div className="instructions">
          <h3>Cara Bermain</h3>
          <ol>
            <li>Pilih gambar yang ingin Anda susun</li>
            <li>Pilih tingkat kesulitan</li>
            <li>Klik dan seret potongan puzzle untuk menyusunnya</li>
            <li>Selesaikan puzzle untuk melihat gambar utuh</li>
          </ol>
        </div>
      </div>

      <div className="item4">
        <h3>Tentang Game</h3>
        <p>Puzzle Gen Z adalah game puzzle jigsaw interaktif yang dibuat menggunakan React.</p>
      </div>

      <div className="item5">
        <p>&copy; 2025 Puzzle Gen Z.</p>
      </div>
    </div>
  );
}

export default App;
