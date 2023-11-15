import React from 'react'
import {Button} from '@/components/Button'
import '@/styles/components/dropdown-menu.scss'

export const DropdownMenu = () => {
  return (
    <div className="dropdown-menu">
      <div className="div">
        <div className="text-wrapper-2">Get Started</div>
        <p className="p">
          Get started today and volunteer with us to drive positive change through technology, making a meaningful
          impact in your community!
        </p>
        <Button
          className="button-instance"
          color="warning"
          divClassName="design-component-instance-node"
          size="s"
          state="enabled"
          text="Get Started"
          variant="fill"
        />
      </div>
      <div className="div">
        <div className="text-wrapper-2">Project</div>
        <p className="p">
          Explore our projects and discover how you can contribute your skills to drive innovation and create positive
          change.
        </p>
        <Button
          className="button-2"
          color="warning"
          divClassName="design-component-instance-node"
          size="s"
          state="enabled"
          text="See Projects"
          variant="fill"
        />
      </div>
      <div className="div">
        <div className="text-wrapper-2">Pitch a Project</div>
        <p className="p">
          Get the latest information and guidance for anyone who want to propose new projects or ideas to the Open
          Sacramento community.
        </p>
        <Button
          className="button-2"
          color="warning"
          divClassName="design-component-instance-node"
          size="s"
          state="enabled"
          text="Pitch a Project"
          variant="fill"
        />
      </div>
      <div className="div-2">
        <div className="text-wrapper-2">Community</div>
        <div className="flexcontainer">
          <p className="text-i">
            <span className="span">
              Join us for our weekly meetings
              <br />
            </span>
          </p>
          <p className="text-i-2">
            <span className="span">on </span>
            <span className="text-wrapper-3">meetup</span>
            <span className="text-wrapper-4">.</span>
          </p>
        </div>
        <p className="for-any-questions">
          <span className="span">For any questions, visit our </span>
          <span className="text-wrapper-3">FAQs</span>
          <span className="text-wrapper-4">.</span>
        </p>
      </div>
    </div>
  );
};
