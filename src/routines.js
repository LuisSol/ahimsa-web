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
        inhaleTime: 1000,
        holdTime: 500,
        exhaleTime: 1000,
        totalTimeSec: 2.5
    },
    {        
        id: 'concen2',
        title: 'Concentración',
        iterations: 12,
        pieChart: {
          background: 'conic-gradient(rgba(0,100,100,.7) 0%, rgba(0,100,100,.7) 40%, rgba(0,150,150,.7) 40%, rgba(0,150,150,.7) 60%, rgba(0,50,50,.7) 60%, rgba(0,50,50,.7) 100%)' 
        },
        inhaleTime: 2000,
        holdTime: 1000,
        exhaleTime: 2000,
        totalTimeSec: 5
    },
    {        
        id: 'relx3',
        title: 'Relajación',
        iterations: 12,
        pieChart: {
          background: 'conic-gradient(rgba(66,0,80,.7) 0%, rgba(66,0,80,.7) 40%, rgba(60,16,83,.5) 40%, rgba(60,16,83,.5) 60%, rgba(60,16,83,.8) 60%, rgba(60,16,83,.8) 100%)' 
        },
        inhaleTime: 4000,
        holdTime: 2000,
        exhaleTime: 4000,
        totalTimeSec: 10
    },
]
