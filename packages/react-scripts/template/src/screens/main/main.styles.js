const headerHeight = '150px'
const logoHeight = '80px'

export default {
  main: {
    textAlign: 'center',
  },
  logo: {
    animation: 'App-logo-spin infinite 20s linear',
    height: logoHeight,
  },
  header: {
    backgroundColor: '#222',
    height: headerHeight,
    padding: '20px',
    color: 'white',
  },
  title: {
    fontSize: '1.5em',
  },
  '@keyframes App-logo-spin': {
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' },
  },
}
