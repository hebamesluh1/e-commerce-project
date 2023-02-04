import React, { Component } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import  PATHS  from './../../routes/index';

export default class ProtectedRoute extends Component {
    render() {
        return (
        <div>
            {this.props.isAuthorized ? (
            <>
                <Outlet />
            </>
            ) : (
            <Navigate to='' />
            )}
        </div>
        );
    }
}