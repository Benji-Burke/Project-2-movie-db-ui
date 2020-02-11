import React from 'react';

export class FooterComponent extends React.Component<any,any>{

    render(){
        return(
            <footer className='page-footer blue-grey darken-3'>
            <div className='container'>
              <div>
                © 2020 Andrew Spiteri, Ben Burke, Hoang Le, & Jared
                Carter
                <div>
                  <em>
                    Icons made by Good Ware and Smashicons from www.flaticon.com
                  </em>
                </div>
              </div>
            </div>
          </footer>
        )
    }
}