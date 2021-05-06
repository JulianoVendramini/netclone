import React, {useEffect, useState} from 'react';
import Tmdb from './Tmdb';
import './App.css';
import MovieRow from './components/MovieRow'
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';
import Footer from './components/Footer';




export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [backGroundBlack, setBackGroundBlack] = useState(false);

  useEffect(() =>{
    let scrollListener  = () =>{
        if(window.scrollY > 10){
          setBackGroundBlack(true);
        }else{
          setBackGroundBlack(false);
        }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  useEffect(() =>{
    const loadAll = async () => {
      //Pegando a lista dos filmes
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //Pegando filme em destaque
      let originals = list.filter(i=>i.slug === 'originals')
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);

      

    }

    loadAll();
  }, []);

  return(
    
    <div className="page">
      <Header black={backGroundBlack}/>
      
        <section className="lists">
        <h1>teste</h1>
        </section>

        <Footer />
        {movieList.length <= 0 && 
        <div className="loading">
          <img src="https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2560%2Cc_limit/Netflix_LoadTime.gif" alt="carregando"/>
        </div>
      }
    </div>
  );
}

/*{featuredData &&
      <FeaturedMovie item = {featuredData}/>
      }
       */

/*className="lists">
          {movieList.map((item, key) => (
            <MovieRow key={key} title = {item.title} items={item.items}/>
          ))}
        */