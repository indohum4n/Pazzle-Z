import React from 'react';

const ImageSelector = ({ images, onSelectImage }) => {
  return (
    <div className="image-selector">
      <h3 className="mb-3">Pilih Gambar</h3>
      <div className="row">
        {images.map((image, index) => (
          <div className="col-md-4 mb-3" key={index}>
            <div 
              className="card image-card" 
              onClick={() => onSelectImage(image.src)}
            >
              <img 
                src={image.src} 
                alt={image.name} 
                className="card-img-top" 
                style={{ height: '150px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <p className="card-text">{image.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSelector;
