<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="shortcut icon" href="/favicon.ico" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta name="theme-color" content="#000000" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="/manifest.json" />
    <!--
      Notice the use of  in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  <script src="/static/js/bundle.js"></script><script src="/static/js/0.chunk.js"></script><script src="/static/js/main.chunk.js"></script></body>

  var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
          {/*---- Include the above in your HEAD tag --------*/}
          {/* Template Source https://bootsnipp.com/snippets/z8l2X */}
          <link href="https://fonts.googleapis.com/css?family=Kaushan+Script" rel="stylesheet" />
          <link href="style.css" rel="stylesheet" />
          <div className="container">
            <div className="row">
              <div className="col-md-5 mx-auto">
                <div id="first">
                  <div className="myform form ">
                    <div className="logo mb-3">
                      <div className="col-md-12 text-center">
                        <h1>Home Page</h1>
                      </div>
                    </div>
                    <form action method="post" name="login">
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Password</label>
                        <input type="password" name="password" id="password" className="form-control" aria-describedby="emailHelp" placeholder="Enter Password" />
                      </div>
                      <div className="form-group">
                        <p className="text-center">By signing up you accept our <a href="#">Terms Of Use</a></p>
                      </div>
                      <div className="col-md-12 text-center ">
                        <button type="submit" className=" btn btn-block mybtn btn-primary tx-tfm">Login</button>
                      </div>
                      <div className="col-md-12 ">
                        <div className="login-or">
                          <hr className="hr-or" />
                          <span className="span-or">or</span>
                        </div>
                      </div>
                      <div className="col-md-12 mb-3">
                        <p className="text-center">
                          <a href="javascript:void();" className="google btn mybtn"><i className="fa fa-google-plus">
                            </i> Signup using Facebook
                          </a>
                        </p>
                      </div>
                      <div className="col-md-12 mb-3">
                        <p className="text-center">
                          <a href="javascript:void();" className="google btn mybtn"><i className="fa fa-google-plus">
                            </i> Signup using Google
                          </a>
                        </p>
                      </div>
                      <div className="form-group">
                        <p className="text-center">Don't have account? <a href="#" id="signup">Sign up here</a></p>
                      </div>
                    </form>
                  </div>
                </div>
                <div id="second">
                  <div className="myform form ">
                    <div className="logo mb-3">
                      <div className="col-md-12 text-center">
                        <h1>Signup</h1>
                      </div>
                    </div>
                    <form action="#" name="registration">
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">First Name</label>
                        <input type="text" name="firstname" className="form-control" id="firstname" aria-describedby="emailHelp" placeholder="Enter Firstname" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Last Name</label>
                        <input type="text" name="lastname" className="form-control" id="lastname" aria-describedby="emailHelp" placeholder="Enter Lastname" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Password</label>
                        <input type="password" name="password" id="password" className="form-control" aria-describedby="emailHelp" placeholder="Enter Password" />
                      </div>
                      <div className="col-md-12 text-center mb-3">
                        <button type="submit" className=" btn btn-block mybtn btn-primary tx-tfm">Get Started For Free</button>
                      </div>
                      <div className="col-md-12 ">
                        <div className="form-group">
                          <p className="text-center"><a href="#" id="signin">Already have an account?</a></p>
                        </div>
                      </div>
                    </form></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  });

</html>
