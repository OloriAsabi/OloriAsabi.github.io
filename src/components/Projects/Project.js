import React,  { useState }  from 'react';
import Typical from 'react-typical';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { projectData } from "../data/ProjectData";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { AiOutlineGithub } from 'react-icons/ai';
import "./Project.css"

import useStyles from "../../styles";

export const Project = () => {
    const classes = useStyles();
    const [index, setIndex] = useState(0);
    const {id, img, text, info, tech, href, url } = projectData[index];
    const checkNumber = (number) => {
     if (number > projectData.length - 1) {
          return 0;
        }
        if (number < 0) {
          return projectData.length - 1;
        }
        return number;
      };
      const nextPerson = () => {
        setIndex((index) => {
          let newIndex = index + 1;
          return checkNumber(newIndex);
        });
      };
      const prevPerson = () => {
        setIndex((index) => {
          let newIndex = index - 1;
          return checkNumber(newIndex);
        });
      };
      const randomPerson = () => {
        let randomNumber = Math.floor(Math.random() * projectData.length);
        if (randomNumber === index) {
          randomNumber = index + 1;
        }
        setIndex(checkNumber(randomNumber));
      };


    return(
     <section className="bg-black" id="projects">      
                  <div className="section">
                 <div className="title">   
                 <h2>My personal Projects</h2>
                <div className="underline"></div>
                  </div>  
                </div>

              <div className="typical">
                <Typical
                className="type"
                    steps={['UpComing Projects:', 'More React.js Projects', 500]}
                    loop={Infinity}
                    wrapper="h4"
                /> 
                </div>
                  <Card className={classes.card}>  
                  <CardActionArea key={id} className={classes.cardArea}>         
                        <CardMedia
                        className={classes.media} 
                        component="img"
                        height="140"
                        image={img}
                        alt="olori's projects"
                      />   
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {text}
                        </Typography>
                        <Typography variant="body2" color="inherit" className={classes.content}>
                        {info}
                        </Typography>
                        <Typography variant="body2" color="inherit" className={classes.content}>
                        Skills: {tech}
                        </Typography>
                          </CardContent>
                          </CardActionArea>
                          <CardActions className={classes.links}>
                            <Button size="small"><a href={href} target="_blank" rel="noopener noreferrer" className="data">Visit Site</a></Button>
                            <Button size="small"><a href={url} target="_blank" className="git" rel="noopener noreferrer"><AiOutlineGithub /></a> </Button>
                          </CardActions>
                        
                           <div className='button-container'>
                           <div>
                                <button className='prev-btn' onClick={prevPerson}>
                                <FaChevronLeft />
                                </button>
                                <button className='next-btn' onClick={nextPerson}>
                                <FaChevronRight />
                                </button>
                             </div>
                            <button className='random-btn' onClick={randomPerson}>
                                Check Projects
                            </button>
                            </div>
                              </Card>
        </section>  
    )
}

