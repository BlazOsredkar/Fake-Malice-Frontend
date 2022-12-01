import React from "react";
import { Link } from "react-router-dom";
import "./404page.css";

export default function NotFoundPage({ location }) {

    return (
        <div className="notFound">
            <div>
                <div className="notfound-404">
                    <h1>
                        404
                    </h1>
                </div>
                <h2>Ups! Očitno si se izgubil/a.</h2>
                <p>Ta spletna stran ne obstaja.</p>
                <Link to={location ?? "/"}>Nazaj na domačo stran</Link>
            </div>
        </div>
    );
}