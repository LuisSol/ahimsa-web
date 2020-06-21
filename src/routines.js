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
        pieChart: [
            { y: 2 },
            { y: 1 },
            { y: 2 },
        ],
        inhaleTime: 1000,
        holdTime: 500,
        exhaleTime: 1000
    },
    {        
        id: 'concen2',
        title: 'Concentración',
        iterations: 12,
        pieChart: [
            { y: 2 },
            { y: 1 },
            { y: 2 },
        ],
        inhaleTime: 2000,
        holdTime: 1000,
        exhaleTime: 2000
    },
    {        
        id: 'relx3',
        title: 'Relajación',
        iterations: 12,
        pieChart: [
            { y: 2 },
            { y: 1 },
            { y: 2 },
        ],
        inhaleTime: 4000,
        holdTime: 2000,
        exhaleTime: 4000
    },

]