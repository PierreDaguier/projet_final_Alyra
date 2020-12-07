import React, { Component } from "react";

export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h3>S'enregistrer</h3>

                <div className="form-group">
                    <label>Prénom</label>
                    <input type="text" className="form-control" placeholder="Prénom" />
                </div>

                <div className="form-group">
                    <label>Nom</label>
                    <input type="text" className="form-control" placeholder="Nom" />
                </div>

                <div className="form-group">
                    <label>Identifiant NUMEN</label>
                    <input type="email" className="form-control" placeholder="NUMEN" />
                </div>

                <div className="form-group">
                    <label>Mot de passe</label>
                    <input type="password" className="form-control" placeholder="Mot de passe" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">S'enregistrer</button>
                <p className="forgot-password text-right">
                    Déjà enregistré(e) ? <a href="#">Se connecter ?</a>
                </p>
            </form>
        );
    }
}