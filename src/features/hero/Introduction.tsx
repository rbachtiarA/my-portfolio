import MyContactsButton from '@/components/ContactsButton'
import { INTRODUCTION } from '@/constant/introduction'

export default function Introduction() {
  return (
        <div className='grid md:grid-cols-2 justify-center items-center gap-4 md:gap-8 lg:gap-16'>
            <h1 className='visible md:hidden text-2xl font-bold text-center'>{INTRODUCTION.title}</h1>
            <div className='relative w-full flex justify-center items-center hero-animation-left'>
                <div className='max-w-[400px]'>
                    <picture>
                        <source type='image/webp' srcSet={INTRODUCTION.image} />
                        <img src={INTRODUCTION.image} alt={INTRODUCTION.altImage} className='rounded-t-full object-cover -z-[1]'/>
                    </picture>
                    <div className='absolute left-0 bottom-0 backdrop-blur-md text-center font-semibold w-full bg-primary/50 rounded-md shadow-md text-lg tracking-wider'>
                        <p className='text-background'>{INTRODUCTION.name}</p>
                        <p className='text-background'>{INTRODUCTION.role}</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col h-full justify-evenly hero-animation-right'>
                <h1 className='hidden md:block text-2xl font-bold'>{INTRODUCTION.title}</h1>
                <p className='text-lg'>{INTRODUCTION.description}</p>
                <div className='flex justify-end'>
                    <MyContactsButton />
                </div>
            </div>
        </div>
  )
}
