import { BloggerTeams } from "../components/BloggerTeams"
import FAQ from "../components/FAQ"
import Banner from "../components/home/Banner"
import Blogs from "../components/home/Blogs"
import NewsLetter from "../components/NewsLetter"

const Home = () => {
  return (
    <div>
      <Banner />
      <Blogs />
      <FAQ />
      <NewsLetter />
      <BloggerTeams />
    </div>
  )
}

export default Home