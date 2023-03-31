import githubLogo from '../assets/github.png'

export function GithubCornerTag() {
  return (
    <a
      href='https://github.com/ipetinate/magic-cube'
      target='_blank'
      className='absolute -top-32 -right-32 bg-white rotate-45 w-64 h-64 flex pt-44 pl-24 hover:bg-violet-300 '
    >
      <img
        src={githubLogo}
        alt='Github octocat logo'
        className='w-16 h-16 rounded-full -rotate-45'
      />
    </a>
  )
}
