const Content = ({ contentArray }) => {
  return (
    <div className="content-container">
      {contentArray.map((content, i) => (
        <p key={content + i}>{content}</p>
      ))}
    </div>


  )
}
export default Content