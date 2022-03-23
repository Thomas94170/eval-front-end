import Document, {Html, Head, Main, NextScript} from "next/document"


class MyDocument extends Document{
    render(){
        return(
            <Html>
                <Head>
                <link
                href="https://fonts.googleapis.com/css2?family=Hurricane&display=optional"
                rel="stylesheet"/>
                <link rel="stylesheet"
                 href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"/>
                </Head>
                <body>
                   <Main/>
                   <NextScript/>
                </body>
            </Html>
        );
    }
}
export default MyDocument