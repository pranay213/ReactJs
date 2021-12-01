import React from 'react';
export default class Text extends React.Component
{
    state={
        user:[{
            name:'pranay' ,loc:'india'
        },{
            name:'pranay' ,loc:'india'}]



    }


    render()
    {
        setTimeout(()=>
        {
            let users=[...this.state.user];
            users[0].name='modified name';
            users[1].loc='modified location';
            this.setState({
                users
            })
        },3000)
        return(
            <React.Fragment>
                <h4>{this.state.user[0].name}</h4>
                <h3>{this.state.user[0].loc}</h3>
                <h4>{this.state.user[1].name}</h4>
                <h3>{this.state.user[1].loc}</h3>

            </React.Fragment>
        )
    }
}