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
        copiedText: 'Copy this'
    }
    postDataHandler = () => {
        const { url, slug } = this.state;
        const regex = new RegExp(/^(ftp|http|https):\/\/[^ "]+$/);
        this.setState({ loading: true });
        if (!url) {
            this.setState({ error: <p>Please enter an URL<span role='img' aria-label='Screaming emojii'>👆</span></p>, loading: false });
            return false;
        } 
        else if (!url.match(regex)) {
                this.setState({ error: <p>Check how you wrote the url - it shoud be something like: https://google.com <span role='img' aria-label='Screaming emojii'>👓</span></p>, loading: false })
                return false;
        }
        else{
            let postUrl;
            if(this.state.slug){
                postUrl = `/links/?url=${url}/&slug=${slug}`;
            }else{
                postUrl = `/links/?url=${url}`;
            }
            axios.post(postUrl)
            .then((response) => {
                this.setState({ urlShorted: response.data.short_url, loading: false, error: false })
                this.props.onNewUrl(response.data);            
            })
            .catch((err) => {
                this.setState({ error: err })
            });
        }
    }
    copyTextHandler = (e) => {
        this.input.select();
        document.execCommand('copy');
        this.input.focus();
        this.setState({ copiedText: 'Copied 📝'})
    }
    
    render(){
        const urlConverted = this.state.urlShorted ? (
            <span className='url__shorted'>
                <input type='text' value={this.state.urlShorted} className='input__url' ref={(input) => this.input = input} />
                <button className='btn btn__small' onClick={this.copyTextHandler}>{this.state.copiedText}</button>
            </span>
        ) : (
                <h1>Enter URL</h1>
            );
        const loader = this.state.loading ? <Spinner /> : '';
    return (
        <section>
            {loader}
            {urlConverted}
            <div className="form">
                <div className='form__group'>
                    <div>
                        <label className='label__txt' htmlFor='urlInput'>Enter URL</label>
                        <input id='urlInput' name='urlToShort' type='url' className='input__url' value={this.state.url}  onChange={(event) => this.setState({url: event.target.value})} placeholder='ex: https://google.com'/>
                        {this.state.error ? <span className='error'>{this.state.error} </span> : ''}
                    </div>
                    <div>
                        <label className='label__txt' htmlFor='slugInput'>Optional Slug</label>
                        <input className='input__url' name='slugInput' id='slugInput' if='slugInput' placeholder='x1z' value={this.state.slug}  onChange={(event) => this.setState({slug: event.target.value})}  />
                    </div>
                </div>
                <button className='btn btn__primary' onClick={this.postDataHandler}>URL</button>
            </div>
        </section>
    )
}
}

export default NewUrl;
