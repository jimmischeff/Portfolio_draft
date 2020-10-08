import React from 'react';

class Project extends React.Component {
    render() {
        const projects = [
            {
                name: 'API project',
                git: "https://github.com/jimmischeff/project1",
                live: 'https://rickandmortydb.vercel.app/',
                img: '../images/project1img.jpeg'
             },
            {
                name: 'Other Project',
                git: 'https://github.com/jimmischeff/proj2',
                live: 'https://jszenproj2.herokuapp.com/auth/login',
                img: '../images/project2img.jpeg'
            }]
        return(
            projects.map((project) => {
            return (
            <div> 
            <h1>{process.env.PUBLIC_URL + project.name}</h1>
            <img src={project.img} alt='oops'/>
            <h4><a href={project.git}>github Link</a></h4>
            <h4><a href={project.live}>The Live Link</a></h4>
            </div> )
            })
        )
    }
}

export default Project;