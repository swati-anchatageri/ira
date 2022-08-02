import React from "react";
//import PropTypes from "prop-types";
import PageTitle from "../components/common/PageTitle";
import {forumQuestion} from "../components/data.json";
import Moment from "moment";
import {  Card, CardBody,FormGroup,FormTextarea, FormInput, Form, Container, Row } from "shards-react";
//import { useLocation } from "react-router-dom";
//import { Col, Card, CardHeader, CardBody, Button } from "shards-react";
//import RangeDatePicker from "../components/common/RangeDatePicker";
//import Chart from "../utils/chart";

class Details extends React.Component{
  constructor(props) {
  super(props);
    this.handleChange = this.handleChange.bind(this);
    this.setData=this.setData.bind(this);
    this.state={
        forumQuestion,
        id:forumQuestion.id,
        title:forumQuestion.title,
        selForumQuestion: {}
    }
    //this.canvasRef = React.createRef();
    this.setData();

}

setData=()=>{
  const currentURL = window.location.href;
  const index = currentURL.substring((currentURL.lastIndexOf('/'))+1);
  this.state.forumQuestion.forEach(element => {
    if(element.id==index){
      //debugger
      this.setState({
        selForumQuestion:element
      })
      this.state.selForumQuestion=element
      this.setState({state:this.state})
    }
  });
  console.log(this.state.selForumQuestion)
}
componentDidMount(){
  this.setData()
}
handleChange(event){
    this.setState({id: event.target.value});
    this.setState({title: event.target.value});
}

  render(){
    return(
        <>
        <Container fluid className="main-content-container px-4 pb-4">
        <Row noGutters className="page-header py-4">
             <PageTitle sm="4" title="Details" subtitle="Forum QUestions" className="text-sm-left" />
           </Row>
           <Card small className="h-100">
           <CardBody className="d-flex flex-column">

        
      <Form className="quick-post-form">
      <div>
      <FormGroup>
      <h6><b>Title</b></h6>
          <FormInput value={this.state.selForumQuestion.title} disable placeholder={this.state.selForumQuestion.title}/>
        </FormGroup>
        <h6><b>Description</b></h6>
        <FormGroup>
          <FormTextarea maxlength="100" value={this.state.selForumQuestion.description}  disable/>
        </FormGroup>
      </div>  
      <h6><b>Comments</b></h6>
      <p className="text-secondary">{this.state.selForumQuestion.comments.map((com)=><span className="border-bottom">{com.user.name}</span>  )}{" "}on {" "}{this.state.selForumQuestion.comments.map((com)=><span>{Moment(com.createdAt).format('MMM Do YYYY')}</span>  )}</p>
        <p>{this.state.selForumQuestion.comments.map((com)=><span>{com.comment}</span>  )}</p>
      </Form>
      </CardBody>

           </Card>
</Container>
        </>
        )
    }
}

  
  

//   componentDidMount() {
//     const chartOptions = {
//       ...{
//         responsive: true,
//         legend: {
//           position: "top"
//         },
//         elements: {
//           line: {
//             // A higher value makes the line look skewed at this ratio.
//             tension: 0.3
//           },
//           point: {
//             radius: 0
//           }
//         },
//         scales: {
//           xAxes: [
//             {
//               gridLines: false,
//               ticks: {
//                 callback(tick, index) {
//                   // Jump every 7 values on the X axis labels to avoid clutter.
//                   return index % 7 !== 0 ? "" : tick;
//                 }
//               }
//             }
//           ],
//           yAxes: [
//             {
//               ticks: {
//                 suggestedMax: 45,
//                 callback(tick) {
//                   if (tick === 0) {
//                     return tick;
//                   }
//                   // Format the amounts using Ks for thousands.
//                   return tick > 999 ? `${(tick / 1000).toFixed(1)}K` : tick;
//                 }
//               }
//             }
//           ]
//         },
//         hover: {
//           mode: "nearest",
//           intersect: false
//         },
//         tooltips: {
//           custom: false,
//           mode: "nearest",
//           intersect: false
//         }
//       },
//       ...this.props.chartOptions
//     };

//     const BlogUsersOverview = new Chart(this.canvasRef.current, {
//       type: "LineWithLine",
//       data: this.props.chartData,
//       options: chartOptions
//     });

//     // They can still be triggered on hover.
//     const buoMeta = BlogUsersOverview.getDatasetMeta(0);
//     buoMeta.data[0]._model.radius = 0;
//     buoMeta.data[
//       this.props.chartData.datasets[0].data.length - 1
//     ]._model.radius = 0;

//     // Render the chart.
//     BlogUsersOverview.render();
//   }

//   render() {
//     const { title } = this.props;
//     return (
//         <Container fluid className="main-content-container px-4 pb-4">
//       <Row noGutters className="page-header py-4">
//              <PageTitle sm="4" title="Forum Questions" subtitle="Forum Questions" className="text-sm-left" />
//            </Row>
//       <Card small className="h-100">
//         <CardHeader className="border-bottom">
//           <h6 className="m-0">{title}</h6>
//         </CardHeader>
//         <CardBody className="pt-0">
//           <Row className="border-bottom py-2 bg-light">
//             <Col sm="6" className="d-flex mb-2 mb-sm-0">
//               <RangeDatePicker />
//             </Col>
//             <Col>
//               <Button
//                 size="sm"
//                 className="d-flex btn-white ml-auto mr-auto ml-sm-auto mr-sm-0 mt-3 mt-sm-0"
//               >
//                 View Full Report &rarr;
//               </Button>
//             </Col>
//           </Row>
//           <canvas
//             height="120"
//             ref={this.canvasRef}
//             style={{ maxWidth: "100% !important" }}
//           />
//         </CardBody>
//       </Card>
//       </Container>
//     );
//   }
// }

// Details.propTypes = {
//   /**
//    * The component's title.
//    */
//   title: PropTypes.string,
//   /**
//    * The chart dataset.
//    */
//   chartData: PropTypes.object,
//   /**
//    * The Chart.js options.
//    */
//   chartOptions: PropTypes.object
// };

// Details.defaultProps = {
//   title: "Details",
//   chartData: {
//     labels: Array.from(new Array(30), (_, i) => (i === 0 ? 1 : i)),
//     datasets: [
//       {
//         label: "Current Month",
//         fill: "start",
//         data: [
//           500,
//           800,
//           320,
//           180,
//           240,
//           320,
//           230,
//           650,
//           590,
//           1200,
//           750,
//           940,
//           1420,
//           1200,
//           960,
//           1450,
//           1820,
//           2800,
//           2102,
//           1920,
//           3920,
//           3202,
//           3140,
//           2800,
//           3200,
//           3200,
//           3400,
//           2910,
//           3100,
//           4250
//         ],
//         backgroundColor: "rgba(0,123,255,0.1)",
//         borderColor: "rgba(0,123,255,1)",
//         pointBackgroundColor: "#ffffff",
//         pointHoverBackgroundColor: "rgb(0,123,255)",
//         borderWidth: 1.5,
//         pointRadius: 0,
//         pointHoverRadius: 3
//       },
//       {
//         label: "Past Month",
//         fill: "start",
//         data: [
//           380,
//           430,
//           120,
//           230,
//           410,
//           740,
//           472,
//           219,
//           391,
//           229,
//           400,
//           203,
//           301,
//           380,
//           291,
//           620,
//           700,
//           300,
//           630,
//           402,
//           320,
//           380,
//           289,
//           410,
//           300,
//           530,
//           630,
//           720,
//           780,
//           1200
//         ],
//         backgroundColor: "rgba(255,65,105,0.1)",
//         borderColor: "rgba(255,65,105,1)",
//         pointBackgroundColor: "#ffffff",
//         pointHoverBackgroundColor: "rgba(255,65,105,1)",
//         borderDash: [3, 3],
//         borderWidth: 1,
//         pointRadius: 0,
//         pointHoverRadius: 2,
//         pointBorderColor: "rgba(255,65,105,1)"
//       }
//     ]
//   }
 //};

export default Details;
