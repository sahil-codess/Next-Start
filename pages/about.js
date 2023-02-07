import Footer from "@/components/Footer"

const about = () => {
  return (
    <div className="content"><h2>About</h2></div>
  )
}

export default about

about.getLayout = function PageLayout(page) {
  return(
    <>
      {page}
      <Footer />
    </>
  )
}