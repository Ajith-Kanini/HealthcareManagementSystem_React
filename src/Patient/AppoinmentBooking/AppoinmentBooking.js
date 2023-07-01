import React, { useEffect, useState } from 'react'
import './AppoinmentBooking.css'
import axios from 'axios';
import { Variable } from '../../Assets/Variable';
const AppoinmentBooking = () => {
    const [doctorDetails, setdoctorDetails] = useState([])
    const fetchDoctorDetails = async () => {
        try {
            await axios.get(Variable.DOCTORAPI_URL)
                .then(res => setdoctorDetails(res.data.filter(dt => dt.requestStatus === true)))

        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        fetchDoctorDetails();
    });

  return (
    <section className='AppointForm'>
            <div class="formbold-main-wrapper">
                <div class="formbold-form-wrapper">
                    <form>
                        <h2>Book An Appoinment</h2>
                        <div class="formbold-mb-5">
                            <label for="name" class="formbold-form-label"> Full Name </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Full Name"
                                class="formbold-form-input"
                            />
                        </div>
                        <div class="formbold-mb-5">
                            <label for="phone" class="formbold-form-label"> Phone Number </label>
                            <input
                                type="text"
                                name="phone"
                                id="phone"
                                placeholder="Enter your phone number"
                                class="formbold-form-input"
                            />
                        </div>
                        <div class="formbold-mb-5">
                            <label for="email" class="formbold-form-label"> Email Address </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your email"
                                class="formbold-form-input"
                            />
                        </div>
                        <div class="formbold-mb-5">
                            <label for="phone" class="formbold-form-label"> Category </label>
                            {/* <input
                                type="text"
                                name="diagnose"
                                id="diagnose"
                                placeholder="Enter your health issue"
                                class="formbold-form-input"
                            /> */}
                            <select>
                                <option value="">Select the Specialist</option>
                                {
                                    doctorDetails.map(op=>(
                                        <option value={op.specialization} className='formbold-form-input'>{op.specialization}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div class="flex flex-wrap formbold--mx-3">
                            <div class="w-full sm:w-half formbold-px-3">
                                <div class="formbold-mb-5 w-full">
                                    <label for="date" class="formbold-form-label"> Date </label>
                                    <input
                                        type="date"
                                        name="date"
                                        id="date"
                                        class="formbold-form-input"
                                    />
                                </div>
                            </div>
                            <div class="w-full sm:w-half formbold-px-3">
                                <div class="formbold-mb-5">
                                    <label for="time" class="formbold-form-label"> Time </label>
                                    <input
                                        type="time"
                                        name="time"
                                        id="time"
                                        class="formbold-form-input"
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="formbold-mb-5 formbold-pt-3">
                            <label class="formbold-form-label formbold-form-label-2">
                                Address Details
                            </label>
                            <div class="flex flex-wrap formbold--mx-3">
                                <div class="w-full sm:w-half formbold-px-3">
                                    <div class="formbold-mb-5">
                                        <input
                                            type="text"
                                            name="area"
                                            id="area"
                                            placeholder="Enter area"
                                            class="formbold-form-input"
                                        />
                                    </div>
                                </div>
                                <div class="w-full sm:w-half formbold-px-3">
                                    <div class="formbold-mb-5">
                                        <input
                                            type="text"
                                            name="city"
                                            id="city"
                                            placeholder="Enter city"
                                            class="formbold-form-input"
                                        />
                                    </div>
                                </div>
                                <div class="w-full sm:w-half formbold-px-3">
                                    <div class="formbold-mb-5">
                                        <input
                                            type="text"
                                            name="state"
                                            id="state"
                                            placeholder="Enter state"
                                            class="formbold-form-input"
                                        />
                                    </div>
                                </div>
                                <div class="w-full sm:w-half formbold-px-3">
                                    <div class="formbold-mb-5">
                                        <input
                                            type="text"
                                            name="post-code"
                                            id="post-code"
                                            placeholder="Post Code"
                                            class="formbold-form-input"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <button class="formbold-btn">Book Appointment</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
  )
}

export default AppoinmentBooking
