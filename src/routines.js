// DISPLAY REPRESENTATION ROUTINES
export const routinesDisplay = [
    {
      id: 'energy1',
      title: 'Energía',
      image: '/images/energy.svg'
    },
    {
      id: 'concen2',
      title: 'Concentración',
      image: '/images/concentration.svg'
    },
    {
      id: 'relx3',
      title: 'Relajación',
      image: '/images/relax.svg'
    },
  ]

// STATE REPRESENTATION ROUTINES  
export default [
    {        
        id: 'energy1',
        title: 'Energía',
        iterations: 12,
        pieChart: {
          background: 'conic-gradient(rgba(255,0,0,.5) 0%, rgba(255,0,0,.5) 40%, rgba(255,50,0,.5) 40%, rgba(255,50,0,.5) 60%, rgba(255,0,0,.8) 60%, rgba(255,0,0,.8) 100%)' 
        },
        inhaleTime: 1,
        holdTime: 0.5,
        exhaleTime: 1
    },
    {        
        id: 'concen2',
        title: 'Concentración',
        iterations: 12,
        pieChart: {
          background: 'conic-gradient(rgba(0,100,100,.7) 0%, rgba(0,100,100,.7) 40%, rgba(0,150,150,.7) 40%, rgba(0,150,150,.7) 60%, rgba(0,50,50,.7) 60%, rgba(0,50,50,.7) 100%)' 
        },
        inhaleTime: 2,
        holdTime: 1,
        exhaleTime: 2
    },
    {        
        id: 'relx3',
        title: 'Relajación',
        iterations: 12,
        pieChart: {
          background: 'conic-gradient(rgba(66,0,80,.7) 0%, rgba(66,0,80,.7) 40%, rgba(60,16,83,.5) 40%, rgba(60,16,83,.5) 60%, rgba(60,16,83,.8) 60%, rgba(60,16,83,.8) 100%)' 
        },
        inhaleTime: 4,
        holdTime: 2,
        exhaleTime: 4
    },
]
