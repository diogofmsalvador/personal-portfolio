import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./skills-gallery.css";

export default function SkillsGallery({ skills }) {
    var settings = {
        dots: false,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    };

    var skills_images = [];

    skills.forEach(element => {

        switch (element) {
            case "Android":
                skills_images.push({
                    imagePath: "/about/certificates/android_logo.png",
                    alt: "Android"
                }
                );
                break;
            case "Angular":
                skills_images.push(
                    {
                        imagePath: "/about/certificates/angular_logo.svg",
                        alt: "Angular"
                    }
                );
                break;
            case "AWS":
                skills_images.push(
                    {
                        imagePath: "/about/certificates/aws_logo.png",
                        alt: "AWS"
                    });
                break;
            case "Azure":
                skills_images.push(
                    {
                        imagePath: "/about/certificates/azure_logo.png",
                        alt: "Azure"
                    });
                break;
            case "Bitbucket Pipeline":
                skills_images.push(
                    {
                        imagePath: "/about/certificates/bitbucket_pipeline_logo.png",
                        alt: "Bitbucket Pipeline"
                    });
                break;
            case "BrowserStack":
                skills_images.push(
                    {
                        imagePath: "/about/certificates/browserstack_logo.png",
                        alt: "BrowserStack"
                    });
                break;
            case "Burp Suite":
                skills_images.push(
                    {
                        imagePath: "/about/certificates/burp_logo.png",
                        alt: "Burp Suite"
                    });
                break;
            case "Concourse":
                skills_images.push(
                    {
                        imagePath: "/about/certificates/concourse_logo.png",
                        alt: "Concourse"
                    });
                break;
            case "Docker":
                skills_images.push(
                    {
                        imagePath: "/about/certificates/docker_logo.webp",
                        alt: "Docker"
                    });
                break;
            case "Flutter":
                skills_images.push(
                    {
                        imagePath: "/about/certificates/flutter_logo.png",
                        alt: "Flutter"
                    });
                break;
            case "Github Actions":
                skills_images.push(
                    {
                        imagePath: "/about/certificates/github_actions_logo.png",
                        alt: "Github Actions"
                    });
                break;
            case "Google Cloud":
                skills_images.push(
                    {
                        imagePath: "/about/certificates/google_cloud_logo.png",
                        alt: "Google Cloud"
                    });
                break;
            case "Gradle":
                skills_images.push(
                    {
                        imagePath: "/about/certificates/gradle_logo.png",
                        alt: "Gradle"
                    });
                break;
            case "Java":
                skills_images.push(
                    {
                        imagePath: "/about/certificates/java_logo.png",
                        alt: "Java"
                    });
                break;
            case "Jenkins":
                skills_images.push(
                    {
                        imagePath: "/about/certificates/jenkins_logo.png",
                        alt: "Jenkins"
                    });
                break;
            case "JMeter":
                skills_images.push(
                    {
                        imagePath: "/about/certificates/jmeter_logo.svg",
                        alt: "JMeter"
                    });
                break;
            case "Kubernetes":
                skills_images.push(
                    {
                        imagePath: "/about/certificates/kubernetes_logo.png",
                        alt: "Kubernetes"
                    });
                break;
            case "Lambda":
                skills_images.push(
                    {
                        imagePath: "/about/certificates/lambda_logo.png",
                        alt: "Lambda"
                    });
                break;
            case "Microservices":
                skills_images.push(
                    {
                        imagePath: "/about/certificates/microservice_logo.png",
                        alt: "Microservices"
                    });
                break;
            case "Mongo DB":
                skills_images.push(
                    {
                        imagePath: "/about/certificates/mongo_logo.png",
                        alt: "Mongo DB"
                    });
                break;
            case "MySQL":
                skills_images.push(
                    {
                        imagePath: "/about/certificates/mysql_logo.png",
                        alt: "MySQL"
                    });
                break;
            case "ASP .NET":
                skills_images.push(
                    {
                        imagePath: "/about/certificates/net_logo.png",
                        alt: "ASP .NET"
                    });
                break;
            case ".NET":
                skills_images.push(
                    {
                        imagePath: "/about/certificates/net_logo.png",
                        alt: ".NET"
                    });
                break;
            case "Next JS":
                skills_images.push(
                    {
                        imagePath: "/about/certificates/next_logo.png",
                        alt: "Next JS"
                    });
                break;
            case "Outsystems":
                skills_images.push(
                    {
                        imagePath: "/about/certificates/outsystems_logo.png",
                        alt: "Outsystems"
                    });
                break;
            case "Postegre SQL":
                skills_images.push(
                    {
                        imagePath: "/about/certificates/postegre_logo.png",
                        alt: "Postegre SQL"
                    });
                break;
            case "Python":
                skills_images.push(
                    {
                        imagePath: "/about/certificates/python_logo.png",
                        alt: "Python"
                    });
                break;
            case "React":
                skills_images.push(
                    {
                        imagePath: "/about/certificates/react_logo.png",
                        alt: "React"
                    });
                break;
            case "SCRUM":
                skills_images.push(
                    {
                        imagePath: "/about/certificates/scrum_logo.png",
                        alt: "SCRUM"
                    });
                break;
            case "SEO":
                skills_images.push(
                    {
                        imagePath: "/about/certificates/seo_logo.png",
                        alt: "SEO"
                    });
                break;
            case "SonarGraph":
                skills_images.push(
                    {
                        imagePath: "/about/certificates/sonargraph_logo.png",
                        alt: "Sonargraph"
                    });
                break;
            case "Spring Boot":
                skills_images.push(
                    {
                        imagePath: "/about/certificates/spring_logo.png",
                        alt: "Spring Boot"
                    });
                break;
            case "Terraform":
                skills_images.push(
                    {
                        imagePath: "/about/certificates/terraform_logo.svg",
                        alt: "Terraform"
                    });
                break;
            case "Wireshark":
                skills_images.push(
                    {
                        imagePath: "/about/certificates/wireshark_logo.png",
                        alt: "Wireshark"
                    });
                break;
        }
    });

    var elem = skills_images.map(item =>
        <div className="skills-carousel-item">
            <div className="skills-carousel-item-logo">
                <img src={item.imagePath} alt={item.alt} />
            </div>
            <div>
                <h3>{item.alt}</h3>
            </div>
        </div>
    );

    return (
        <
            // @ts-ignore
            Slider {...settings} className="skills-carousel">
            {elem}
        </Slider>
    );
}