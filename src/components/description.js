import React, { Component } from 'react';


class Description extends Component{
  

    render(){
        return(
            <div className="container mt-5">
                <div className="row mt-5">
                    <div className="col-12 col-md-3 mt-3 description-heading"><h2 className="justify-self-center">Baked Fresh with Love.</h2></div>
                    
                    <div className="col-12 col-md-7  mt-3 offset-md-1 description-text">
                        Kitchen Diaries offer a huge range of delicacies - cupcakes, cheesecakes, cookies,
                        brownies, you name it! All made from the freshest ingredients that will leave you 
                        wanting for more. Have a look at our range and we’re certain you will end up falling 
                        in love!
                    </div>
                </div>
            </div>
        );
    }
}


export default Description;