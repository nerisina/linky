import React, { Component } from 'react';
import axios from'../../axios-urls'
import Spinner from '../UI/Spinner/Spinner'

class NewUrl extends Component {
    state = {
        url: '',
        slug: '', //optional
        error: false,
        urlShorted: false,
        loading: false,
    }
    postDataHandler = () => {
        const { url, slug } = this.state;
        this.setState({ loading: true })

        let postUrl;
        if(this.state.slug){
            postUrl = `/links/?url=${url}/&slug=${slug}`;
        }else{
            postUrl = `/links/?url=${url}`;
        }

        axios.post(postUrl)
        .then((response) => {
            this.setState({ urlShorted: response.data.short_url, loading: false, })
        })
        .catch((err) => {
            this.setState({ error: err })
        });
    }
    
    render(){
        const urlConverted = this.state.urlShorted ? (
            <span className='url__shorted'>
                {this.state.urlShorted}
                <button className='btn btn__small'>Copy this</button>
            </span>
        ) : (
                'Enter your url'
            );
        const loader = this.state.loading ? <Spinner /> : '';
    return (
        <div >
            {loader}
            <h1>{urlConverted}</h1>
            <div className="form">
                <div className='form__group'>
                    <div>
                        <label className='label__txt' htmlFor='urlInput'>Enter URL</label>
                        <input id='urlInput' name='urlToShort' type='url' className='input__url' value={this.state.url}  onChange={(event) => this.setState({url: event.target.value})} placeholder='ex: https://google.com'/>
                        {this.state.error ? <span className='error'>Noup, wrong url <span role='img' aria-label='Screaming emojii'>😱</span></span> : ''}
                    </div>
                    <div>
                        <label className='label__txt' htmlFor='slugInput'>Optional Slug</label>
                        <input className='input__url' if='slugInput' placeholder='x1z' value={this.state.slug}  onChange={(event) => this.setState({slug: event.target.value})}  />
                    </div>
                </div>
                <button className='btn btn__primary' onClick={this.postDataHandler}>Shorten URL</button>
            </div>
        </div>
    )
}
}

export default NewUrl;
