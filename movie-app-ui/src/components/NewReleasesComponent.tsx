import React from 'react';
import axios from 'axios';


let apiUrlBase = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_THE_MOVIE_DB}&language=en-US&page=1'`

interface INewReleaseState{
    newReleases: any[],
    
    id: string,
    search: string,



}

export class NewReleasesComponent extends React.Component<any,any>{
    constructor(props:any){
        super(props);
        this.state={
            newReleases: [],
            movie: {},
            id: '',
            search: '',
            // movieSelected: false
        }
    }

    async getData() {
        const response = await axios.get(`${apiUrlBase}`);
        const data = response.data;
        // console.log(response)
        console.log('data:', data)
        this.setState({
          newReleases: data,
        });
      }

      async componentDidMount() {
        await this.getData();
        
     
      }



      render() {
        return (
            <h1>hello</h1>
        )
      }
    }