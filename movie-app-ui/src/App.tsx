import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { FooterComponent } from './components/FooterComponent';
import { ShowMovieComponent } from './components/ShowMovieComponent';
import  LoginComponent  from './components/redux/LoginContainer';
import { RegisterComponent } from './components/RegisterComponent';
import {  SearchMoviesComponent } from './components/SearchMoviesComponent';
import { NavbarComponent } from './components/NavBarComponent';
import { NewReleasesComponent } from './components/NewReleasesComponent';
import ProfileComponent from './components/redux/ProfileContainer';
import {MovieLikeComponent} from './components/MovieLikeComponent';
import { store } from './Store';
import { Provider } from 'react-redux';

import FavoriteComponent from './components/FavoriteComponent';
import { LogoutComponent } from './components/LogoutComponent';






interface IAppState {
  imdbId: string
  movieSelected: boolean
  userId: string
  Title: '',
  movieFavorite: false
}

class App extends React.Component<any, IAppState> {
  handleAddFavoriteList: any;
  constructor(props:any){
    super(props);
    this.state={
      imdbId: '',
      movieSelected: false,
      movieFavorite: false,
      userId: '',
      Title: '',
    

    }
  }
  handleClick=(id:any)=>{
    this.setState({
      imdbId: id
    })
    
  }

 


  render(){
    return (
      <div className="App">
        
        <Provider store={store}>
        <h1>MovieFriend</h1>
        
      <Router>
      <NavbarComponent/>
        <Switch>
        <Route
              path='/'
              exact
              render={props => (
                <SearchMoviesComponent {...props} handleClick={this.handleClick}
                />
                
                )}
               

           
            />
            <Route
                path='/new'
                component={NewReleasesComponent}
            />

            <Route
                path='/favorites'
                exact
                render={props=>(
                  <FavoriteComponent {...props} handleAddFavoriteList={this.handleAddFavoriteList}
                  />
                )}
             
                />


            <Route
            path={`/Movies/selected/${this.state.imdbId}`}
            
            render={props => (
              <ShowMovieComponent
                {...props}
                imdbID={this.state.imdbId}
                
              />
            )}
          />

          
           <Route
          path='/logout' component={LogoutComponent}
          />
          <Route
          path='/login' component={LoginComponent}
          />
       
          
          <Route
          path='/register' component={RegisterComponent}
          />

          <Route
          path='/profile' component={ProfileComponent}
          />
           <Route
          path='/movielike' component={MovieLikeComponent}
          />

          

         

        </Switch>
      </Router>
      <FooterComponent/>
      </Provider>
      </div>
    );
  }  
}

export default App;
