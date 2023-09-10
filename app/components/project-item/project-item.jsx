import React from 'react';
import './project-item.css';
import Link from 'next/link';

export const ProjectItem = ({ title, smallDescription, category, backgrounds, images, date }) => {

    var id_card = title.replace(/\s+/g, '-').toLowerCase();

    var background_color_one = '#550056';
    var background_color_two = '#a75100';

    if (backgrounds.color_one !== '' && backgrounds.color_two !== '') {
        background_color_one = backgrounds.color_one;
        background_color_two = backgrounds.color_two;
    }

    return (
        <Link className='proj-card' href={`/projects/${id_card}`} style={{
            textDecoration: 'none',
            color: 'white'
        }}>
        <div>
            <style jsx>{`
                #{id_card} {
                    position: relative;
                    border-radius: 30px;
                    overflow: hidden;
                    margin: 20px;
                    cursor: pointer;

                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
                    outline: 1.5px solid rgba(255, 255, 255, 0.2);
                }

                #{id_card}::before {
                    content: "";
                    background: linear-gradient(90deg, ${background_color_one}, ${background_color_two});
                    opacity: 0.85;
                    position: absolute;
                    width: 100%;
                    height: 0;
                    transition: 0.4s ease-in-out;
                }
            `}</style>
            <div id={id_card} className="proj-imgbx">
                <div className="proj-before" style={{
                    background: `linear-gradient(90deg, ${background_color_one}, ${background_color_two})`
                }}>
                    <h3>
                        {title}
                    </h3>
                    <img src={images} alt="project-img" />
                    <div className='proj-role'>
                        <h4>
                            ● {category} ●
                        </h4>
                    </div>
                </div>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <hr/>
                    <div className='proj-txtx-description'>
                        <span>
                            {smallDescription}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        </Link>
    )
}