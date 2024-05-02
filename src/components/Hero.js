import HeroImg from '../assets/hero.png';
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

export default function Hero() {
    const config  = {
        subtitle: 'Im a Full-stack developer and Designer',
        social: {
            github: 'https://github.com/vis0912',
            linkedin: 'https://linkedin.com/in/vishal-pranav-088057284'
        }
    }


    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
       <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-white text-6xl font-hero-font'>Hi, <br/> I'm <span className='text-black'>M</span> Vishal Pranav 
                <p className='text-2xl'>{config.subtitle}</p>
            </h1>
            <div className='flex py-10'>
                <a href={config.social.github} className='pr-5 hover:text-white'><AiOutlineGithub size={40} /></a>
                <a href={config.social.linkedin} className='hover:text-white'><AiOutlineLinkedin size={40}/></a>
            </div>
       </div>
       <img className='md:w-1/3' src={HeroImg} />
    </section>
}
