import React from 'react';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      countLimitTitle: 50,
    };
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    let limitTitle = event.target.value;
    let title2 = limitTitle.length > 50 ? limitTitle.splice(1, 50) : limitTitle;

    console.log(limitTitle.length);
    this.setState(() => {
      return {
        title: title2,
        countLimitTitle: 50 - event.target.value.length,
      };
    });
  }

  onBodyChangeHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitHandler(event) {
    event.preventDefault();
    this.props.onAddNotes(this.state);
    alert('Note Saved');

    this.setState(() => {
      return {
        title: '',
        body: '',
        countLimitTitle: 50,
      };
    });
  }

  render() {
    return (
      <div className='note-input'>
        <h2>Tulis sesuatu..</h2>
        <form onSubmit={this.onSubmitHandler}>
          <p className='note-input__title__char-limit'>
            Sisa Karakter : {this.state.countLimitTitle}
          </p>
          <input
            type='text'
            className='note-input__title'
            placeholder='judul'
            value={this.state.title}
            onChange={this.onTitleChangeHandler}
          />

          <textarea
            cols='30'
            rows='10'
            placeholder='Tuliskan catatan di sini...'
            onChange={this.onBodyChangeHandler}
            value={this.state.body}
          ></textarea>
          <button type='submit'>submit</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
