import React, { Component } from "react";

export default class Login extends Component {
    render() {
        return (
            <form>
                <h3>Se connecter</h3>

                <div className="form-group">
                    <label>Numéro NUMEN</label>
                    <input type="email" className="form-control" placeholder="Entrez votre identifiant NUMEN" />
                </div>

                <div className="form-group">
                    <label>Mot de passe</label>
                    <input type="password" className="form-control" placeholder="Entrez votre mot de passe" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Se souvenir de moi</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Se connecter</button>
                <p className="forgot-password text-right">
                    Vous avez oublié votre <a href="#">mot de passe ?</a>
                </p>
            </form>
        );
    }
}
