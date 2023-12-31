'use client';

import { profileConstant } from '@/constants/ProfileConstant';
import Image from 'next/image';
import React from 'react';
import { FaUser } from 'react-icons/fa';

export default function ProfileHeader() {
    return (
        <div className="flex justify-evenly p-8">
            <div className="space-y-8">
                <div className="card-layout flex flex-col space-y-2">
                    {/* Icon */}
                    <div>
                        <FaUser className="h-6 w-6 rounded-full text-center text-primary-pink" />
                    </div>
                    <h1 className="text-3xl font-semibold text-primary">
                        Hi,I am{' '}
                        <span className="text-primary-pink">
                            {profileConstant.fullName}
                        </span>
                    </h1>
                    <p>{profileConstant.description}</p>
                    <div className="flex flex-col space-y-2">
                        {profileConstant.profileHeaderItem.map(
                            (profileItem, index) => (
                                <div
                                    key={index}
                                    className="flex items-center space-x-3"
                                >
                                    <profileItem.icon className="h-8 w-8 rounded-full text-center text-primary-pink" />
                                    <span>{profileItem.title}</span>
                                </div>
                            ),
                        )}
                    </div>
                </div>
                <div className="card-layout flex flex-col space-y-5">
                    <p>Download my curriculum vitae:</p>
                    <div className="flex space-x-10">
                        <button className="primary-button">DOWNLOAD CV</button>
                        <button className="primary-button">CONTACT ME</button>
                    </div>
                </div>
            </div>
            <div>
                <div className="card-layout">
                    <Image
                        src={'/myImage.jpeg'}
                        className="rounded-lg object-cover"
                        width={400}
                        height={400}
                        alt="profile"
                    />
                </div>
            </div>
        </div>
    );
}
