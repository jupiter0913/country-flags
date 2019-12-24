'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

// SVG source:
// https://github.com/lipis/flag-icon-css/tree/master/flags/4x3

export default function( props )
{
  return(
    <SvgIcon viewBox="0 0 640 480" {...props}>
      <g strokeWidth="1pt">
        <path fill="#006" d="M0 0h640v480H0z"/>
        <path d="M0 0v27.95L307.037 250h38.647v-27.95L38.647 0H0zm345.684 0v27.95L38.647 250H0v-27.95L307.037 0h38.647z" fill="#fff"/>
        <path d="M144.035 0v250h57.614V0h-57.615zM0 83.333v83.333h345.684V83.333H0z" fill="#fff"/>
        <path d="M0 100v50h345.684v-50H0zM155.558 0v250h34.568V0h-34.568zM0 250l115.228-83.334h25.765L25.765 250H0zM0 0l115.228 83.333H89.463L0 18.633V0zm204.69 83.333L319.92 0h25.764L230.456 83.333H204.69zM345.685 250l-115.228-83.334h25.765l89.464 64.7V250z" fill="#c00"/>
        <g fill-rule="evenodd" fill="#fff">
          <path d="M299.762 392.523l-43.653 3.795 6.013 43.406-30.187-31.764-30.186 31.764 6.014-43.406-43.653-3.795 37.68-22.364-24.244-36.495 40.97 15.514 13.42-41.713 13.42 41.712 40.97-15.515-24.242 36.494M486.528 432.528l-10.537-15.854 17.81 6.742 5.824-18.125 5.825 18.126 17.807-6.742-10.537 15.854 16.37 9.718-18.965 1.65 2.616 18.85-13.116-13.793-13.117 13.794 2.616-18.85-18.964-1.65M486.528 150.433l-10.537-15.856 17.81 6.742 5.824-18.122 5.825 18.12 17.807-6.74-10.537 15.855 16.37 9.717-18.965 1.65 2.616 18.85-13.116-13.793-13.117 13.794 2.616-18.85-18.964-1.65M380.742 265.033l-10.537-15.853 17.808 6.742 5.825-18.125 5.825 18.125 17.808-6.742-10.536 15.853 16.37 9.72-18.965 1.65 2.615 18.85-13.117-13.795-13.117 13.795 2.617-18.85-18.964-1.65M580.586 236.824l-10.558-15.854 17.822 6.742 5.782-18.125 5.854 18.125 17.772-6.742-10.508 15.854 16.362 9.718-18.97 1.65 2.608 18.85-13.118-13.793-13.117 13.793 2.61-18.85-18.936-1.65M541.938 319.936l-10.367 6.425 2.914-11.84-9.316-7.863 12.165-.896 4.605-11.29 4.606 11.29 12.165.897-9.317 7.863 2.912 11.84"/>
        </g>
      </g>
    </SvgIcon>
  )
}
