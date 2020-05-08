//@flow
import React from 'react';

type Props = {
  width?: number,
  height?: number,
  color?: string
}

const Trash = ({width = 14, height = 18, color = '#31343A'}: Props): JSX.Element => {
  return (
    <svg width={`${width}`} height={`${height}`} viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M9.3274 2.15655H12.0223C13.1128 2.15655 14 3.07918 14 4.21307V4.31858C14 5.18502 13.481 5.92666 12.7501 6.22888V15.9435C12.7501 17.0773 11.8629 18 10.7723 18H3.2277C2.13718 18 1.24993 17.0774 1.24993 15.9435V6.22884C0.518919 5.92666 0 5.18502 0 4.31855V4.21303C0 3.07918 0.88715 2.15655 1.97774 2.15655H4.67274C4.80717 0.944533 5.79883 0 6.99998 0C8.20117 0 9.19297 0.94457 9.3274 2.15655ZM8.37957 2.15655C8.25339 1.48439 7.68315 0.975277 6.99998 0.975277C6.31706 0.975277 5.74679 1.48435 5.62065 2.15655H8.37957ZM11.812 15.9435C11.812 16.5397 11.3455 17.0248 10.7723 17.0248H3.22767C2.65445 17.0248 2.18793 16.5396 2.18793 15.9435V6.37503H11.812V15.9435ZM12.0222 5.39979C12.5954 5.39979 13.062 4.9147 13.062 4.31855H13.062V4.21303C13.062 3.61687 12.5955 3.13179 12.0223 3.13179H1.97774C1.40453 3.13179 0.938001 3.61687 0.938001 4.21303V4.31855C0.938001 4.9147 1.40453 5.39979 1.97774 5.39979H12.0222Z"
            fill={color}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M4.8125 15.3001C5.05413 15.3001 5.25 15.0569 5.25 14.7571V8.64313C5.25 8.34332 5.0541 8.1001 4.8125 8.1001C4.5709 8.1001 4.375 8.34332 4.375 8.64313V14.7571C4.37497 15.057 4.57087 15.3001 4.8125 15.3001Z"
            fill={color}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M6.99998 15.3001C7.2416 15.3001 7.4375 15.0569 7.4375 14.7571V8.64313C7.4375 8.34332 7.24154 8.1001 6.99998 8.1001C6.7584 8.1001 6.5625 8.34332 6.5625 8.64313V14.7571C6.5625 15.057 6.75836 15.3001 6.99998 15.3001Z"
            fill={color}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M9.18753 15.3001C9.42913 15.3001 9.625 15.0569 9.625 14.7571V8.64313C9.625 8.34332 9.4291 8.1001 9.18753 8.1001C8.94587 8.1001 8.75 8.34332 8.75 8.64313V14.7571C8.74997 15.057 8.94594 15.3001 9.18753 15.3001Z"
            fill={color}/>
    </svg>
  )
};

export { Trash };