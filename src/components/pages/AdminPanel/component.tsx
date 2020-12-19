import React from 'react'
import { Table } from '../..'
import { color } from '../../../theme'
import { Button } from '../../atoms'
import NextJSLink from 'next/link'
import { pages } from '../pagesConfig'
import { FullBoosterProgram } from '../../../store/boosterPrograms/types'

const usersRowStructure = user => ({
  rowContents: [
    {
      title: 'Name',
      content: (user && user.username) || '',
    },
    {
      title: 'Email',
      content: user && user.email,
    },
    {
      title: 'Created at',
      content: user && user.created_at,
    },
    {
      title: '',
      content: user && (
        <NextJSLink href={`${pages.editUser.path}/${user.id}`}>
          <Button>Edit</Button>
        </NextJSLink>
      ),
    },
  ],
})

const boosterProgramRowStructure = (boosterProgram:FullBoosterProgram) => ({
  rowContents: [
    {
      title: 'Starting Elo',
      content: (boosterProgram && boosterProgram.starting_elo) || '',
    },
    {
      title: 'Target Elo',
      content: boosterProgram && boosterProgram.target_elo,
    },
    {
      title: 'Price',
      content: boosterProgram && boosterProgram.price,
    },
    {
      title: 'Created at',
      content: boosterProgram && boosterProgram.created_at,
    },
    {
      title: '',
      content: boosterProgram && (
        <NextJSLink href={`${pages.editBoosterProgram.path}/${boosterProgram.id}`}>
          <Button>Edit</Button>
        </NextJSLink>
      ),
    },
  ],
})

const tabs = {
  users: { id: 1, name: 'Users' },
  boosterPrograms: { id: 2, name: 'Booster Programs' },
}

export class AdminPanelPageComponent extends React.Component<any, any> {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: null,
      data: [],
      rowStructure: null,
    }
  }

  selectTab = id => {
    const { adminUsersRequest, adminGraffitiesRequest } = this.props
    const { selectedTab } = this.state
    if (selectedTab !== id) {
      if (id === tabs.users.id) {
        this.setState(
          { selectedTab: id, rowStructure: usersRowStructure },
          () => adminUsersRequest(payload => this.setState({ data: payload })),
        )
      }
      if (id === tabs.boosterPrograms.id) {
        this.setState(
          { selectedTab: id, rowStructure: boosterProgramRowStructure },
          () =>
            adminGraffitiesRequest(payload => this.setState({ data: payload })),
        )
      }
    }
  }

  render() {
    const { selectedTab, data, rowStructure } = this.state
    return (
      <div className="page-wrapper">
        <div>
          <h1>Admin panel</h1>
        </div>
        <div className="tabWrapper">
          {Object.entries(tabs).map(([key, val]) => {
            return (
              <div
                className="tab"
                key={key}
                style={
                  selectedTab === val.id
                    ? {
                        backgroundImage: `linear-gradient(
                  to bottom right,
                  ${color('grey', 600)},
                  ${color('grey', 600)}
                )`,
                      }
                    : null
                }
                onClick={() => this.selectTab(val.id)}>
                {val.name}
              </div>
            )
          })}
        </div>
        {selectedTab && (
          <Table
            data={data}
            rowStructure={rowStructure}
            notFoundText="No records found"
          />
        )}
        <style jsx>
          {`
            .tableWrapper {
              width: 100%;
            }
            .tab {
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 20px;
              font-weight: 800;
              user-select: none;
              width: 20%;
              color: ${color('light', 300)};
              background-image: linear-gradient(
                to bottom right,
                ${color('grey', 600)},
                ${color('grey', 800)}
              );
              height: 40px;
              text-align: center;
              cursor: pointer;
              border: 2px solid ${color('dark')};
            }
            .tab:hover {
              background-image: linear-gradient(
                to bottom right,
                ${color('grey', 700)},
                ${color('grey', 700)}
              );
            }
            .tabWrapper {
              display: flex;
              justify-content: center;
              margin-bottom: 30px;
              width: 100%;
            }
            .page-wrapper {
              display: flex;
              flex-direction: column;
              width: 100%;
              height: 100%;
            }

            h1 {
              text-align: center;
              color: ${color('light', 200)};
            }

            .create-button-container {
              display: flex;
              justify-content: flex-end;
              margin-bottom: 10px;
              margin-right: 15px;
            }
          `}
        </style>
      </div>
    )
  }
}
