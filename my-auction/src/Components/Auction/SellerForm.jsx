import React, { useState } from 'react';
import axios from 'axios';

export default function SellerForm({ onClose }) {
    const [formData, setFormData] = useState({
        productName: '',
        productType: '',
        productDesc: '',
        startPrice: '',
        productPicture: null,
        productPictureLink: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = {
                productName: formData.productName,
                productType: formData.productType,
                productDesc: formData.productDesc,
                startPrice: formData.startPrice,
                productPicture: formData.productPicture,
                productPictureLink: formData.productPictureLink,

            };

            const response = await axios.post('http://localhost:4000/auction/additems', {data}, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            onClose();
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: files ? files : value,
        }));
    };

    return (
        <div className="form-container">
            <div className="close-button" onClick={onClose}>
                close
            </div>
            <div className="form-content">
                <h2>Seller Form</h2>
                <form onSubmit={handleSubmit} className="product-form">
                    {['productName', 'productType', 'productDesc', 'startPrice'].map((field) => (
                        <div className="form-group" key={field}>
                            <label htmlFor={field}>{field.replace(/([a-z])([A-Z])/g, '$1 $2')}</label>
                            <input
                                type={field === 'startPrice' ? 'number' : 'text'}
                                id={field}
                                name={field}
                                onChange={handleInputChange}
                                value={formData[field]}
                                required
                            />
                        </div>
                    ))}

                    <div className="form-group">
                        <label>Upload Picture:</label>
                        <select value={formData.productPicture ? 'file' : 'link'} onChange={handleInputChange}>
                            <option value="file">Upload File</option>
                            <option value="link">Provide Link</option>
                        </select>
                    </div>

                    {formData.productPicture && (
                        <div className="form-group">
                            <label htmlFor="productPicture">Choose File:</label>
                            <input
                                type="file"
                                id="productPicture"
                                name="productPicture"
                                accept="image/*"
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    )}

                    {!formData.productPicture && (
                        <div className="form-group">
                            <label htmlFor="productPictureLink">Image Link:</label>
                            <input
                                type="url"
                                id="productPictureLink"
                                name="productPictureLink"
                                value={formData.productPictureLink}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    )}

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}
