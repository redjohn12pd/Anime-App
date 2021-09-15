import React from "react";
import style from "./index.module.css";
import { ReactComponent as ArrowLeft } from "./img/iconmonstr-arrow-64 (1).svg";
import { ReactComponent as ArrowRight } from "./img/iconmonstr-arrow-25.svg";
class CardDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openings: [],
      endings: [],
      cont: 0,
    };
    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
  }
  handleNext() {
    if (this.state.cont <= this.props.opening_themes.length - 2) {
      this.setState({
        //concatenamos el state viejo con la propiedad nueva modificada
        ...this.state,
        cont: this.state.cont + 1,
      });
    } else {
      this.setState({
        //concatenamos el state viejo con la propiedad nueva modificada
        ...this.state,
        cont: 0,
      });
    }
  }
  handlePrevious() {
    if (this.state.cont > 0) {
      this.setState({
        //concatenamos el state viejo con la propiedad nueva modificada
        ...this.state,
        cont: this.state.cont - 1,
      });
    }
  }
  render() {
    return (
      <div className={style.cardDescription}>
        <h3>{this.props.title}</h3>
        <div className={style.items}>
          <ul>
            <li>Type: {this.props.type}</li>
            <li>Episodes: {this.props.episodes}</li>
            <li>
              Aired: {this.props.aired && this.props.aired.from.slice(0, 10)}
            </li>
            <li>Duration: {this.props.duration}</li>
            <li>Rating: {this.props.rating}</li>
            <li>Score: {this.props.score}</li>
            <li>Rank: {this.props.rank}</li>
            <li>Popularity: {this.props.popularity}</li>
            <li>Premiered: {this.props.premiered}</li>
          </ul>
        </div>
        <h3 className={style.spaceTop}>SoundTracks</h3>
        <div className={style.containerSlider}>
          <button
            className={style.button}
            onClick={() => this.handlePrevious()}
          >
            <ArrowLeft />
          </button>
          <div className={style.slider}>
            {this.props.opening_themes &&
              this.props.opening_themes.map((theme, index) =>
                index >= this.state.cont ? <p key={index}>{theme}</p> : null
              )}
          </div>
          <button className={style.button} onClick={() => this.handleNext()}>
            <ArrowRight />
          </button>
        </div>
      </div>
    );
  }
}
export default CardDescription;
