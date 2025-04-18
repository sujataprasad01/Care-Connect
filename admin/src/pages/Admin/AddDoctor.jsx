import React, { useState, useRef, useContext  } from 'react';
import axios from 'axios';
import profile from '../../assets/profile.png';
import { AdminContext } from '../../context/AdminContext';

const AddDoctor = () => {
    const fileInputRef = useRef(null);
    const [docImg, setDocImg] = useState(null);
    const [preview, setPreview] = useState(null);

    const [doctorData, setDoctorData] = useState({
        name: '',
        email: '',
        password: '',
        speciality: '',
        degree: '',
        experience: '',
        about: '',
        available: true,
        fees: '',
        address: {
            line1: '',
            line2: ''
        },
        date: '',
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (name === 'available') {
            setDoctorData(prev => ({ ...prev, available: checked }));
        } else if (name in doctorData.address) {
            setDoctorData(prev => ({
                ...prev,
                address: {
                    ...prev.address,
                    [name]: value
                }
            }));
        } else {
            setDoctorData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setDocImg(file);
        if (file) {
            setPreview(URL.createObjectURL(file));
        }
    };

    const {backendUrl, aToken}=useContext(AdminContext)

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('image', docImg);
            Object.entries({
                ...doctorData,
                date: Number(doctorData.date),
                fees: Number(doctorData.fees),
                experience: Number(doctorData.experience)
            }).forEach(([key, value]) => {
                if (key === 'address') {
                    Object.entries(value).forEach(([addrKey, addrVal]) => {
                        formData.append(`address[${addrKey}]`, addrVal);
                    });
                } else {
                    formData.append(key, value);
                }
            });

            const res = await axios.post(backendUrl+'/api/admin/add-doctor', formData, {
                headers: { 'Content-Type': 'multipart/form-data',
                    aToken
                }
            });
            console.log(res.data);
            alert('Doctor added successfully!');
            setDoctorData({
                name: '',
                email: '',
                password: '',
                speciality: '',
                degree: '',
                experience: '',
                about: '',
                available: true,
                fees: '',
                address: { line1: '', line2: '' },
                date: '',
            });
            console.log(setDoctorData);
            setDocImg(null);
            setPreview(null);
        } catch (err) {
            alert('Error adding doctor.');
            console.error(err);
        }
    };

    return (
        <div className="w-full p-18 pt-0">
            <h2 className="text-2xl font-semibold mb-4 text-center">Add New Doctor</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Image Upload Section */}
                <div className="text-center md:col-span-2">
                    <label className="block mb-1 font-medium cursor-pointer" onClick={handleImageClick}>
                        <img
                            className="w-20 h-20 object-cover rounded-full mx-auto border-2 border-gray-300"
                            src={preview || profile}
                            alt="Upload"
                        />
                    </label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                        ref={fileInputRef}
                    />
                    <p className="text-sm text-gray-600 mt-1">Upload Doctor's Profile Image</p>
                </div>

                {[
                    { label: 'Name', name: 'name', type: 'text' },
                    { label: 'Email', name: 'email', type: 'email' },
                    { label: 'Password', name: 'password', type: 'password' },
                    { label: 'Degree', name: 'degree', type: 'text' },
                    { label: 'Fees', name: 'fees', type: 'number' },
                ].map(({ label, name, type }) => (
                    <div key={name}>
                        <label className="block mb-1 font-medium">{label}</label>
                        <input
                            name={name}
                            type={type}
                            value={doctorData[name]}
                            onChange={handleChange}
                            className="input w-full border p-2 rounded"
                            required
                        />
                    </div>
                ))}

                {/* Speciality Dropdown */}
                <div>
                    <label className="block mb-1 font-medium">Speciality</label>
                    <select
                        name="speciality"
                        value={doctorData.speciality}
                        onChange={handleChange}
                        className="input w-full border p-2 rounded"
                        required
                    >
                        <option value="">Select Speciality</option>
                        <option value="Gynocologist">Gynocologist</option>
                        <option value="Dermatologist">Dermatologist</option>
                        <option value="General Physician">General Physician</option>
                        <option value="Neurological">Neurological</option>
                        <option value="Others">Others</option>
                        <option value="All">All</option>
                    </select>
                </div>

                {/* Experience Dropdown */}
                <div>
                    <label className="block mb-1 font-medium">Experience</label>
                    <select
                        name="experience"
                        value={doctorData.experience}
                        onChange={handleChange}
                        className="input w-full border p-2 rounded"
                        required
                    >
                        <option value="">Select Experience</option>
                        <option value="1">1 Year</option>
                        <option value="2">2 Years</option>
                        <option value="3">3+ Years</option>
                        <option value="5">5+ Years</option>
                        <option value="10">10+ Years</option>
                    </select>
                </div>

                {/* About */}
                <div className="md:col-span-2">
                    <label className="block mb-1 font-medium">About</label>
                    <textarea
                        name="about"
                        value={doctorData.about}
                        onChange={handleChange}
                        className="input w-full border p-2 rounded"
                        required
                    />
                </div>

                {/* Address Fields (line1 and line2) */}
                <div className="md:col-span-2">
                    <label className="block mb-1 font-medium">Address Line 1 (Street, City)</label>
                    <input
                        name="line1"
                        type="text"
                        value={doctorData.address.line1}
                        onChange={handleChange}
                        className="input w-full border p-2 rounded"
                        required
                    />
                </div>
                <div className="md:col-span-2">
                    <label className="block mb-1 font-medium">Address Line 2 (State, Zip)</label>
                    <input
                        name="line2"
                        type="text"
                        value={doctorData.address.line2}
                        onChange={handleChange}
                        className="input w-full border p-2 rounded"
                        required
                    />
                </div>

                {/* Date */}
                <div>
                    <label className="block mb-1 font-medium">Available Date (Timestamp)</label>
                    <input
                        name="date"
                        type="number"
                        value={doctorData.date}
                        onChange={handleChange}
                        className="input w-full border p-2 rounded"
                        required
                    />
                </div>

                {/* Availability Toggle */}
                <div className="flex items-center space-x-3">
                    <input
                        name="available"
                        type="checkbox"
                        checked={doctorData.available}
                        onChange={handleChange}
                        className="h-5 w-5"
                    />
                    <label className="font-medium">Available</label>
                </div>

                {/* Submit Button */}
                <div className="md:col-span-2">
                    <button
                        type="submit"
                        className="bg-violet-500 hover:bg-violet-600 text-white py-2 px-6 rounded w-full"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddDoctor;
