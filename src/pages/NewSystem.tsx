import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react"
import { Header } from "../components/Header"
import Chart from 'react-apexcharts'


export function NewSystem() {
    const options = {
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: true
    },
    foreColor: theme.colors.gray[300]
  },
  grid: {
    show: false
    
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    
    enabled: false
    
  },
  xaxis: {
    categories: ["Segunda","Terça","Quarta","Quinta","Sexta","Sábado","Domingo"],
    axisBorder: {
      color: theme.colors.gray[600]
    },
    
    
  }, 
  colors: [ '#f5c420'],
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    
    },
  },
  
}

const series = [
  {
    name: "Laudos",
    data:  [10,7,5,8,6,9,11],


  },
  
  
]
      
    return(
        <>
        <Header title="Dashboard" />
         <Flex m="2" overflow="auto" height={800}>
            <SimpleGrid 
            flex="1"
            gap="4"
            minChildWidth="360px"
            align="flex-start" as={Flex}
            >
                  <Box
        p="8"
        textAlign="center"
        rounded="8"
        height="320px"
        m="2"
        >
          <Text fontSize="lg" mb="4" className="text-zinc-300">
           Vendas da Semana
          </Text>
          <Chart type="area" height={228} options={options}
            series={series}
          />
        </Box>

                    <Box
        p="8"
        textAlign="center"
     
        rounded="8"
        height="320px"
        m="2"
        >
          <Text fontSize="lg" mb="4" className="text-zinc-300">
           Dias de mais venda
          </Text>
          <Chart type="radar" height={228} options={options}
            series={series}
          />
        </Box>

            </SimpleGrid>
            
        </Flex>
        </>
       
    )
}