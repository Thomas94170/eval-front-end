import React from "react";

export const Footer=()=>{
    return(
        <>
        <div className='container bg-dark text-info text-center'>
        <div className='d-flex justify-content-between'>
                <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer ' className='hover'>
                <div>
                    <i className='fab fa-facebook-f'><img src="https://img.icons8.com/color/48/000000/facebook.png"/></i>
                </div>
            </a>
            <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer ' className='hover'>
                <div>
                    <i className='fab fa-instagram'><img src="https://img.icons8.com/fluency/48/000000/instagram-new.png"/></i>
                </div>
            </a>
                    <div>ThomasDevWeb94</div>
                </div>
        </div>
        </>
    )
}