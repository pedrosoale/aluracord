import { Box, Button, Text, TextField, Image } from '@skynexui/components'
import React from 'react';
import { useRouter } from 'next/router'
import appConfig from '../config.json'

function Titulo(props) {

  const Tag = props.tag || 'h1';
  return (
    <>
      <h1>{props.children}</h1>
      <style jsx>{`
        h1 {
          color: ${appConfig.theme.colors.neutrals['000']};
          font-size: 24px;
          font-weight: 600;
        }
      `}</style>
    </>
  );
}
// Componente React
/* function HomePage() {
  // JSX
  return (
    <div>
      <GlobalStyle />
      <Title tag="h2">Boas vindas de volta!</Title>
      <h2>Discord - Alura Matrix</h2>
    </div>
  );
} */
//export default HomePage;

export default function PaginaInicial() {
  //const username = 'pedrosoale';
  const [username, setUsername] = React.useState('pedrosoale')
  const roteamento = useRouter()

  return (
    <>
      <Box
        styleSheet={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: appConfig.theme.colors.primary[200],
          backgroundImage:
            "url(https://sep-bucket-prod.s3.amazonaws.com/wp-content/uploads/2022/01/podio-copinha-palmeiras-2022.jpg)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
        }}
      >
        <Box
          styleSheet={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            width: "100%",
            maxWidth: "700px",
            borderRadius: "5px",
            padding: "32px",
            margin: "16px",
            boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
            //backgroundColor: appConfig.theme.colors.neutrals["700"],
            backgroundColor: "#000000c0",
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault()
              console.log('Alguem submeteu o form')
              roteamento.push('/chat')
              //window.location.href = '/chat'
            }}
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: "100%", sm: "50%" },
              textAlign: "center",
              marginBottom: "32px",
            }}
          >
            <Titulo tag="h2">O maior do Brasil!</Titulo>
            <Text
              variant="body3"
              styleSheet={{
                marginBottom: "32px",
                color: appConfig.theme.colors.neutrals[300],
              }}
            >
              {appConfig.name}
            </Text>

            {/* <input 
              type="text"
              value={username}
              onChange={function handler(event) {
                console.log("usuario digitou", event.target.value)
                // Onde está o valor?
                const valor = event.target.value
                // Trocar o valor da variável
                // através do React e avise quem precisa
                setUsername(valor)
              }}
            /> */}
            <TextField
              value={username}
              onChange={function handler(event) {
                console.log("usuario digitou", event.target.value)
                // Onde está o valor?
                const valor = event.target.value
                // Trocar o valor da variável
                // através do React e avise quem precisa
                setUsername(valor)
              }}
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[500],
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                },
              }}
            />
            <Button
              type="submit"
              label="Entrar"
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[500],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[600],
              }}
            />
          </Box>
          {/* Formulário */}

          {/* Photo Area */}
          <Box
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "200px",
              padding: "16px",
              //backgroundColor: appConfig.theme.colors.neutrals[800],
              backgroundColor: "#000000c0",
              border: "1px solid",
              borderColor: appConfig.theme.colors.neutrals[999],
              borderRadius: "10px",
              flex: 1,
              minHeight: "240px",
            }}
          >
            <Image
              styleSheet={{
                borderRadius: "50%",
                marginBottom: "16px",
              }}
              src={`https://github.com/${username}.png`}
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[200],
                //backgroundColor: appConfig.theme.colors.neutrals[900],
                backgroundColor: "#000000c0",
                padding: "3px 10px",
                borderRadius: "1000px",
              }}
            >
              {username}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}