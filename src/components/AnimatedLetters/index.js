import './index.scss'

// Desc: This components takes three arguments the class on which the animation is going to be
//       applied the array of strings which this animation is going to be applied and finally
//       the index on which this animation is going to be applied.
const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    <span>
      {
        strArray.map((char, i) => (
          <span key={char + i} className={`${letterClass} _${i + idx}`}>
            {char}
          </span>
        ))
      }
    </span>
  );
}

export default AnimatedLetters